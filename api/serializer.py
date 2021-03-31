from rest_framework import serializers
from .models import Post, Contact, Media, Project
from django.contrib.auth.models import User


class PostSerializer(serializers.ModelSerializer):
    image = serializers.ImageField()

    def create(self, validated_data):
        img = validated_data['image']
        slug = validated_data['slug']
        return Post.objects.create(title=validated_data['title'],
                                   slug=validated_data['slug'],
                                   author=User.objects.get(id=validated_data['author']),
                                   content=validated_data['content'],
                                   status=validated_data['status'],
                                   img_link=slug)

        media = Media(name=slug, file=img)
        media.save()

    class Meta:
        model = Post
        fields = ('title', 'slug', 'author', 'content', 'created_on', 'status',
                  'image', 'img_link')
        lookup_field = 'slug'


class ViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('title', 'slug', 'author', 'content', 'created_on', 'status',
                  'img_link')
        lookup_field = 'slug'


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ('name', 'email', 'subject', 'message')


class CDNSerializer(serializers.ModelSerializer):
    class Meta:
        model = Media
        fields = ['name', 'file', 'file_binary']


class ProjectSerializer(serializers.ModelSerializer):
    image = serializers.ImageField()

    def create(self, validated_data):
        img = validated_data['image']
        title = validated_data['title']
        media = Media(name=title, file=img)
        media.save()
        return Project.objects.create(title=validated_data['title'],
                                      description=validated_data['description'],
                                      github_link=validated_data['github_link'],
                                      img_link=title)

    class Meta:
        model = Project
        fields = ('title', 'description', 'github_link', 'image', 'img_link')
        lookup_field = 'description'


class ViewProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('title', 'description', 'github_link', 'img_link')
