from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CommViewSet,SendEmailView 
# from .whatsapp_cli import whatsapp_webhook, broadcast_initial_message, receive_language_preference
from .whatsapp_cli import start_communication_flow

router = DefaultRouter()
router.register(r'comm', CommViewSet) 

urlpatterns = [
    path('', include(router.urls)),
    path('send-email/', SendEmailView.as_view(), name='send-email'),  
    # path('webhook/whatsapp/', whatsapp_webhook, name='whatsapp_webho/ok'),
    # path('broadcast/', broadcast_initial_message, name='broadcast_message'),
    # path('webhooks/twilio/', receive_language_preference, name='twilio_webhook'),
    path('start_communication/', start_communication_flow, name='start_communication_flow'),
]
