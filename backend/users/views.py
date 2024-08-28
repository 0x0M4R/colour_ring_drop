import json
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login as django_login
from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import User
from .serializers import UserSerializer
from utils.jwt_handler import JWTHandler, CustomTokenObtainPairSerializer

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({
                "id": user.id,
                "username": user.username,
                "email": user.email,
                "first_name": user.first_name,
                "last_name": user.last_name,
                "phone_number": user.phone_number
            }, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@csrf_exempt
def login(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            username = data.get('username')
            password = data.get('password')
            user = authenticate(username=username, password=password)
            if user:
                django_login(request, user)
                token = JWTHandler.generate_jwt(user)
                response = JsonResponse({
                    'message': 'Login successful',
                    'access': token['access'],
                    'refresh': token['refresh']
                })
                response.set_cookie(
                    key='jwt',
                    value=token['access'],
                    max_age=3600,
                    httponly=True,
                    samesite='None',
                    secure=True
                )
                user.is_active = True
                user.save()
                return response
            else:
                return JsonResponse({'error': 'Invalid credentials'}, status=401)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON provided'}, status=400)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)


class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        refresh_token = request.data.get('refresh_token')
        if not refresh_token:
            return Response({'error': 'Refresh token required'}, status=400)
        result = JWTHandler.invalidate_token(refresh_token)
        if 'error' in result:
            return Response(result, status=400)
        return Response({'message': 'Token invalidated successfully'}, status=204)

class BlacklistTokenView(APIView):
    def post(self, request):
        refresh_token = request.data.get('refresh_token')
        if not refresh_token:
            return Response({'error': 'Refresh token required'}, status=400)
        result = JWTHandler.blacklist_token(refresh_token)
        if 'error' in result:
            return Response(result, status=400)
        return Response({'message': 'Token blacklisted successfully'}, status=204)