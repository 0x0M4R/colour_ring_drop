# Generated by Django 5.1 on 2024-08-28 05:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_user_custom_link_user_ref_link_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='custom_link',
        ),
        migrations.RemoveField(
            model_name='user',
            name='ref_link',
        ),
        migrations.AlterField(
            model_name='user',
            name='preferred_language',
            field=models.CharField(blank=True, max_length=2, null=True),
        ),
    ]
