# Generated by Django 5.1 on 2024-08-28 05:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0003_order_payment_status_alter_order_status'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='payment_status',
        ),
        migrations.AlterField(
            model_name='order',
            name='status',
            field=models.CharField(max_length=50),
        ),
    ]
