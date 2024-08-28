from django.http import HttpResponse
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from django.conf import settings
from django.contrib.auth import get_user_model  
import os
from .models import User




# Register the font
# font_path = os.path.join(settings.STATIC_ROOT, 'Nunito_Sans/static/NunitoSans_10pt_Condensed-LightItalic.ttf')
# pdfmetrics.registerFont(TTFont('NunitoSans', font_path))

def generate_invitation(user, event_date='October 10, 2024', register_deadline='October 1, 2024', participation_link='http://example.com/rsvp', ref_link='http://example.com/share'):
    # Set up the PDF file path
    file_path = os.path.join(settings.MEDIA_ROOT, f'invitations/invitation_{user.id}.pdf')

    # Ensure the directory exists
    os.makedirs(os.path.dirname(file_path), exist_ok=True)

    # Start creating the PDF
    c = canvas.Canvas(file_path, pagesize=letter)
    width, height = letter

    # Customizing message and drawing it
    c.setFont("Times-BoldItalic", 12)
    y_position = height - 260
    text_lines = [
        f"Dear {user.first_name},",
        "You're invited to an exclusive event:",
        f'"The Drop" - A Private Jewelry Unveiling {event_date} | www.xyz.com',
        "Be one of the few to own our limited edition pieces before their public release. Only 25 exquisite items available.",
        f"Your discretion is appreciated, Please RSVP by {register_deadline}: {user.custom_link}",
        "We'll share details via WhatsApp on the registered number.",
        "Looking forward to your presence at this special occasion.",
        "Your discretion is appreciated, but feel free to extend this rare opportunity to your inner circle through ",
        f"the following link {user.ref_link}.",
        "Warmly,",
        "Tariq Riaz",
        "Founder and Creative Designer",
        "To update your WhatsApp number, reply 'UPDATE'."
    ]

    for line in text_lines:
        c.drawString(72, y_position, line)
        y_position -= 20  # Adjust line spacing

    c.save()
    return file_path
