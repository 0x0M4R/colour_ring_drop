import os
from .models import Comm
from users.models import User
from mailjet_rest import Client as MailjetClient
from django.conf import settings
from rest_framework import status, viewsets
from django.http import JsonResponse
from .serializers import CommSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser
from django.template.loader import render_to_string


class CommViewSet(viewsets.ModelViewSet):
    queryset = Comm.objects.all()
    serializer_class = CommSerializer


class SendEmailView(APIView):
    # permission_classes = [IsAdminUser]

    def post(self, request):
        api_key = os.getenv('MAILJET_API_KEY')
        api_secret = os.getenv('MAILJET_SECRET_KEY')
        mailjet = MailjetClient(auth=(api_key, api_secret), version='v3.1')

        to_email = request.data.get('to_email')
        subject = request.data.get('subject', 'No Subject')
        users = User.objects.all()
        errors = []
        for user in users:
            try:
        # Construct HTML content directly
                html_content = f"""
                    <html>
                    <head></head>
                    <body>
                        <div style='text-align: left;'>
                            <img src='https://www.tariqriaz.com/wp-content/uploads/2021/12/TARIQ_RIAZ_logo-408x285.jpg'alt='Event Logo' style='width: 150px;'>
                        </div>
                        <h1>Invitation to The Drop Event</h1>
                        <p>Dear {user.first_name},</p>
                        <p>You are cordially invited to attend <b>The Drop Event</b>, an exclusive gathering for aficionados and enthusiasts alike.</p>
                        <p>Date: October 10, 2024</p>
                        <p>Please confirm your attendance by registering at this link: <a href='http://localhost:8080/register'>Register Here</a></p>
                        <p>We look forward to seeing you there!</p>
                        <br>
                        <p>Warm regards,</p>
                        <p>The Event Organizers</p>
                    </body>
                    </html>
                    """
            except Exception as e:
                errors.append(f"Failed to send message to {user.email}: {str(e)}")  
        if not to_email:
            return Response({"error": "Recipient email address not provided"}, status=status.HTTP_400_BAD_REQUEST)

        data = {
            'Messages': [{
                "From": {
                    "Email": os.getenv('DEFAULT_FROM_EMAIL'),
                    "Name": "Tariq Riaz"
                },
                "To": [{
                    "Email": to_email,
                    "Name": "Recipient's Name"
                }],
                "Subject": subject,
                "HTMLPart": html_content,
                "CustomID": "AppSpecificID"
            }]
        }

        result = mailjet.send.create(data=data)
        if result.status_code == 200:
            return Response({"message": "Email sent successfully"}, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Failed to send email", "details": result.json()}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# https://www.tariqriaz.com/wp-content/uploads/2021/12/TARIQ_RIAZ_logo.jpg 1500w, https://www.tariqriaz.com/wp-content/uploads/2021/12/TARIQ_RIAZ_logo-300x210.jpg 300w, https://www.tariqriaz.com/wp-content/uploads/2021/12/TARIQ_RIAZ_logo-1024x716.jpg 1024w, https://www.tariqriaz.com/wp-content/uploads/2021/12/TARIQ_RIAZ_logo-768x537.jpg 768w,  408w