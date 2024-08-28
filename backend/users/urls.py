from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from .views import UserViewSet, RegisterView, LogoutView, BlacklistTokenView
from rest_framework.routers import DefaultRouter
from .views import CustomTokenObtainPairView

router = DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('logout/', LogoutView.as_view(), name='api_token_logout'),  
    path('register/', RegisterView.as_view(), name='api_register'),  
    path('blacklist-token/', BlacklistTokenView.as_view(), name='blacklist-token'),
    path('', include(router.urls))
]
