# Generated by Django 2.2.3 on 2019-07-17 12:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('notifications', '0005_notification_comment'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='notification',
            options={'ordering': ['-created_at']},
        ),
    ]
