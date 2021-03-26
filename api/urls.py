from django.urls import path
from .views import (PostBlog, ViewBlog, SlugBlog, ContactMe, GetFromCDN,
                    PostToCDN, PostProject, ViewProject)

urlpatterns = [
    path('postblog', PostBlog),
    path('viewblog', ViewBlog),
    path('contact', ContactMe),
    path('cdn', PostToCDN),
    path('project', PostProject),
    path('viewproject', ViewProject),
    path('<slug:slug>', SlugBlog),
    path('cdn/<str:cdn>/', GetFromCDN, name='getImage'),

]
