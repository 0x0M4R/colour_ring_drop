import re
import datetime
from django.utils import timezone
from django.http import JsonResponse
from utils.jwt_handler import JWTHandler
from django.utils.deprecation import MiddlewareMixin
from django.contrib.auth import get_user_model
import jwt



class JWTAuthenticationMiddleware(MiddlewareMixin):
    def __init__(self, get_response):
        self.get_response = get_response
        self.excluded_patterns = [
            re.compile(r'^/api/login/?$'),
            re.compile(r'^/api/register/?$'),
            re.compile(r'^/api/logout/?$'),
            re.compile(r'^/api/send-email/?$'),
            re.compile(r'^/swagger/?$'), 
            re.compile(r'^/redoc/?$'),   
            re.compile(r'^/swagger\.json/?$'),
        ]

    def __call__(self, request):
        if any(pattern.match(request.path_info) for pattern in self.excluded_patterns):
            return self.get_response(request)
        return self.authenticate_request(request)
    
    def authenticate_request(self, request):
        auth_header = request.headers.get('Authorization', '')
        token = auth_header.split(' ')[1] if auth_header.startswith('Bearer ') else request.COOKIES.get('jwt', None)
        if token:
            try:
                # Decode the token once and use the payload
                payload = JWTHandler.decode_jwt(token)
                user = get_user_model().objects.get(id=payload['user_id'])
                if user:
                    request.user = user
                    request.auth = payload
                    return self.get_response(request)
            except jwt.ExpiredSignatureError:
                return JsonResponse({'error': 'Token expired'}, status=401)
            except jwt.InvalidTokenError:
                return JsonResponse({'error': 'Invalid token'}, status=401)
            except get_user_model().DoesNotExist:
                return JsonResponse({'error': 'User not found'}, status=404)
            except Exception as e:
                return JsonResponse({'error': str(e)}, status=500)  
        return JsonResponse({'error': 'Authentication required'}, status=401)

class UpdateLastActivityMiddleware(MiddlewareMixin):
    def __call__(self, request):
        if hasattr(request, 'user') and request.user.is_authenticated:
            if hasattr(request, 'auth'):
                try:
                    token_expiration = datetime.datetime.fromtimestamp(request.auth.get('exp'), tz=timezone.utc)
                    if timezone.now() > token_expiration:
                        request.user.is_active = False
                    else:
                        request.user.last_activity = timezone.now()
                        request.user.save(update_fields=['last_activity'])
                except Exception as e:
                    print(f"Error updating user's last activity: {e}")
        return self.get_response(request)

class LogHeadersMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        print(request.headers)
        return self.get_response(request)
