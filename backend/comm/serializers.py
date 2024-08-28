from rest_framework import serializers
from .models import Comm

class CommSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comm
        fields = ['id', 'user', 'message', 'sent_at', 'notification_type']
