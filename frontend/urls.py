from django.urls import path
from .views import index


urlpatterns = [
    path('', index),
    path('about', index),
    path('blogs', index),
    path('<slug:slug>', index),
    path('contactme', index),
    path('projects', index)
]
