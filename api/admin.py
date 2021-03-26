from django.contrib import admin
from .models import Post, Comment, Media, Project


class PostAdmin(admin.ModelAdmin):

    list_display = ('title', 'slug', 'status', 'created_on', 'content')
    list_filter = ("status",)
    search_fields = ['title', 'content']
    prepopulated_fields = {'slug': ('title',)}


admin.site.register(Post, PostAdmin)

admin.site.register((Comment, Media, Project))
