# Generated by Django 4.0.2 on 2022-03-03 03:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('arithmetic_game', '0003_questionset_delete_questionslist'),
    ]

    operations = [
        migrations.AlterField(
            model_name='questionset',
            name='addExists',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='questionset',
            name='mulsExists',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='questionset',
            name='questions',
            field=models.JSONField(null=True),
        ),
    ]