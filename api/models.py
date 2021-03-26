from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
# from hitcount.models import HitCount
from django.db.models.signals import post_save
from django.dispatch import receiver
from base64 import b64encode
import os

STATUS = ((0, "Draft"), (1, "Publish"))


class Media(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200, unique=True)
    file = models.FileField(upload_to="cdn/files")
    file_binary = models.BinaryField(blank=True)

    def __str__(self):
        return self.name


@receiver(post_save, sender=Media)
def setImageBinary(sender, instance, *args, **kwargs):
    if not instance:
        return
    if hasattr(instance, '_dirty'):
        return

    instance.file_binary = b64encode(open(f'media/{str(instance.file)}', 'rb').
                                     read())
    os.remove(f'media/{str(instance.file)}')

    try:
        instance._dirty = True
        instance.save()
    finally:
        del instance._dirty


class Post(models.Model):
    title = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(max_length=200, unique=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE,
                               related_name='blog_posts')
    content = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    status = models.IntegerField(choices=STATUS, default=0)
    img_link = models.CharField(max_length=200, blank=True)

    class Meta:
        ordering = ['-created_on']

    def __str__(self):
        return self.title


class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE,
                             related_name='comments')
    author = models.CharField(max_length=200)
    text = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
    approved_comment = models.BooleanField(default=False)

    def approve(self):
        self.approved_comment = True
        self.save()

    def __str__(self):
        return self.text


class Contact(models.Model):
    name = models.TextField()
    email = models.EmailField()
    subject = models.TextField()
    message = models.TextField()

    def __str__(self):
        return self.message


class Project(models.Model):
    title = models.TextField()
    description = models.TextField()
    github_link = models.TextField()
    img_link = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return self.title
