# Generated by Django 3.1.4 on 2021-03-23 06:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20210323_0619'),
    ]

    operations = [
        migrations.CreateModel(
            name='Projects',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField()),
                ('description', models.TextField()),
                ('github_link', models.TextField()),
                ('img_link', models.CharField(blank=True, max_length=200)),
            ],
        ),
    ]