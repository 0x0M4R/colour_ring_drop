from django.db import models
from users.models import User

class Comm(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.TextField()
    sent_at = models.DateTimeField(auto_now_add=True)
    notification_type = models.CharField(max_length=50) # e.g., 'email', 'whatsapp'

    def __str__(self):
        return f"Notification for {self.user.username}"

    def total_messages_sent(self):
        return self.objects.count()
    
    def total_whatsapp_sent(self):
        return self.objects.filter(notification_type='whatsapp').count()
    
    def total_email_sent(self):
        return self.objects.filter(notification_type='email').count()