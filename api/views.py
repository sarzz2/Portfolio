from .models import Post, Media, Project
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import (PostSerializer, ContactSerializer, CDNSerializer,
                         ViewSerializer, ProjectSerializer,
                         ViewProjectSerializer)
from django.core.mail import send_mail, BadHeaderError
from base64 import b64decode
from django.shortcuts import HttpResponse


# @api_view(['POST'])
# def PostBlog(request):
#     serializer = PostSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.create(request.data)
#         return Response(serializer.data, status=status.HTTP_201_CREATED)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def ViewBlog(request):
    posts = Post.objects.filter(status=1).order_by('-created_on')
    serializer = ViewSerializer(posts, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def SlugBlog(request, slug):
    posts = Post.objects.filter(slug=slug)
    serializer = ViewSerializer(posts, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def ContactMe(request):
    serializer = ContactSerializer(data=request.data)
    if serializer.is_valid():
        serial_data = serializer.data
        try:
            send_mail(serial_data['subject'], serial_data['email'] +
                      "\n" + serial_data['name'] + "\n\n" + serial_data
                      ['message'], serial_data['email'],
                      ['sarzzenquiry@gmail.com'], fail_silently=False)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except BadHeaderError:
            return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# @api_view(['POST'])
# def PostToCDN(request):
#     serializer = CDNSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#         return Response(serializer.data, status=status.HTTP_201_CREATED)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def GetFromCDN(request, cdn):
    try:
        file = Media.objects.get(name=cdn)
        file_data = b64decode(file.file_binary)

    except Media.DoesNotExist:
        return Response(status.HTTP_404_NOT_FOUND)

    content_Type = GetDataType(file)
    if content_Type == "Not Found":
        return Response(status.HTTP_404_NOT_FOUND)
    return HttpResponse(file_data, content_type=content_Type)


def GetDataType(file):
    datatype = str(file.file)
    datatype = datatype.split('.')[-1]

    mime_types = {
        '.aac': 'audio/aac',
        '.bin': 'application/octet-stream',
        '.bmp': 'image/bmp',
        '.css': 'text/css',
        '.csv': 'text/csv',
        '.doc': 'application/msword',
        '.gz': 'application/gzip',
        '.gif': 'image/gif',
        '.htm': 'text/html',
        '.html': 'text/html',
        '.ico': 'image/vnd.microsoft.icon',
        '.jar': 'application/java-archive',
        '.jpeg': 'image/jpeg',
        '.jpg': 'image/jpeg',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.mp3': 'audio/mpeg',
        '.mp4': 'video/mp4',
        '.png': 'image/png',
        '.pdf': 'application/pdf',
        '.rar': 'application/vnd.rar',
        '.svg': 'image/svg+xml',
        '.txt': 'text/plain',
        '.wav': 'audio/wav',
        '.zip': 'application/zip'
    }
    try:
        return mime_types[f'.{datatype}']
    except KeyError:
        return "Not Found"


# @api_view(['POST'])
# def PostProject(request):
#     serializer = ProjectSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.create(request.data)
#         return Response(serializer.data, status=status.HTTP_201_CREATED)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def ViewProject(request):
    project = Project.objects.all()
    serializer = ViewProjectSerializer(project, many=True)
    return Response(serializer.data)
