import logging
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from twilio.rest import Client as TwilioClient
from .models import User
from django.conf import settings

logger = logging.getLogger(__name__)

@csrf_exempt
def start_communication_flow(request):
    """Initiates the process by sending a bilingual message to select language preference along with an invitation."""
    # if not request.user.is_superuser:
    #     return JsonResponse({"error": "Unauthorized"}, status=403)

    client = TwilioClient(settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN)
    
    event_date = "October 10, 2024"
    registration_link = "http://localhost:8080/api/register"
    users = User.objects.all()
    errors = []
    for user in users:
        try:
            bilingual_message = f"Dear {user.first_name} You are invited to The Drop event on {event_date}. Register here: {registration_link}\n" \
                                "\n\n\n\n\n" \
                                f"أنت مدعو لحضور حدث The Drop في {event_date}. سجل هنا: {registration_link}"\
                                f"\n\n\nTariq Riaz"
            client.messages.create(
                body=bilingual_message,
                from_='whatsapp:+14155238886',
                to=f'whatsapp:{user.phone_number}'
            )
        except Exception as e:
            logger.error(f"Failed to send message to {user.phone_number}: {str(e)}")
            errors.append(f"Failed to send message to {user.phone_number}: {str(e)}")
    
    if errors:
        return JsonResponse({"errors": errors}, status=500)

    return JsonResponse({"message": "Initial broadcast sent!"})

def my_webhook_view(request):
    validator = RequestValidator(settings.TWILIO_AUTH_TOKEN)
    request_valid = validator.validate(
        request.build_absolute_uri(),
        request.POST,
        request.META.get('HTTP_X_TWILIO_SIGNATURE', ''))
    
    if not request_valid:
        return HttpResponseForbidden()

from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter

def create_invitation(user):
    file_path = f'media/invitations/invitation_{user.id}.pdf'
    c = canvas.Canvas(file_path, pagesize=letter)
    width, height = letter

    c.drawString(100, height - 100, f"Dear {user.first_name},")
    c.drawString(100, height - 130, "You are invited!")
    c.drawString(100, height - 160, "Please join us at our event.")
    c.save()

    return file_path


@csrf_exempt
def receive_language_preference(request):
    twilio_client = TwilioClient(os.getenv('TWILIO_ACCOUNT_SID'), os.getenv('TWILIO_AUTH_TOKEN'))
    incoming_msg = request.POST.get('Body', '').strip()
    from_number = request.POST.get('From', '').strip()
    user = User.objects.filter(phone_number=from_number).first()

    if not user:
        return JsonResponse({"error": "User not found"}, status=404)

    if incoming_msg == '1':
        user.preferred_language = 'EN'
    elif incoming_msg == '2':
        user.preferred_language = 'AR'
    else:
        return JsonResponse({"message": "Invalid choice. Please reply with 1 for English, 2 for Arabic."})

    user.save()

    # Generate PDF Invitation
    invitation_path = create_invitation(user)

    # Send PDF as a media message
    message = twilio_client.messages.create(
        from_='whatsapp:+14155238886',
        body="Here is your invitation:",
        media_url=f'https://yourdomain.com/{invitation_path}',  # Ensure this URL is publicly accessible
        to=from_number
    )

    return JsonResponse({"message": "Invitation sent!"})
