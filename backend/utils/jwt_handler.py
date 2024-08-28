from rest_framework_simplejwt.tokens import RefreshToken, BlacklistMixin,OutstandingToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.exceptions import TokenError
from django.contrib.auth import get_user_model
from django.conf import settings  
import jwt  

class JWTHandler:
    @staticmethod
    def generate_jwt(user):
        refresh = RefreshToken.for_user(user)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }


    @staticmethod
    def decode_jwt(token):
        try:
            payload = jwt.decode(token, settings.JWT_SECRET_KEY, algorithms=[settings.JWT_ALGORITHM])
            return payload
        except jwt.ExpiredSignatureError:
            return {'error': 'Token expired'}
        except jwt.InvalidTokenError:
            return {'error': 'Invalid token'}

    @staticmethod
    def get_user_from_token(token):
        try:
            payload = JWTHandler.decode_jwt(token)
            user_id = payload.get('user_id')
            if not user_id:
                raise Exception("User ID not found in token")

            user = get_user_model().objects.get(id=user_id)
            return user
        except get_user_model().DoesNotExist:
            raise Exception('User does not exist')
        except Exception as e:
            raise Exception(f'Error in getting user from token: {str(e)}')
        
    @staticmethod
    def invalidate_token(refresh_token):
        try:
            token = RefreshToken(refresh_token)
            token.blacklist()
        except TokenError as e:
            return {'error': str(e)}

    @staticmethod
    def blacklist_user_tokens(user_id):
        user = get_user_model().objects.get(id=user_id)
        tokens = OutstandingToken.objects.filter(user=user)
        for token in tokens:
            try:
                refresh_token = RefreshToken(token.token)
                refresh_token.blacklist()
            except Exception as e:
                return {'error': str(e)}
        return None
# Custom JWT Token Serializer to add custom claims

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['username'] = user.username
        token['email'] = user.email
        token['first_name'] = user.first_name
        token['last_name'] = user.last_name
        return token
