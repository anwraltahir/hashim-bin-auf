from rest_framework import serializers
from .models import Biography, Education, TimelineItem, Achievement, NewsArticle, MediaItem, ContactSubmission

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ['degree', 'institution', 'period']

class TimelineItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimelineItem
        fields = ['period', 'role', 'organization']

class BiographySerializer(serializers.ModelSerializer):
    education = EducationSerializer(many=True, read_only=True)
    timeline = TimelineItemSerializer(many=True, read_only=True)

    class Meta:
        model = Biography
        fields = ['name', 'title', 'full_bio', 'leadership_philosophy', 'education', 'timeline']

class AchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievement
        fields = ['id', 'title', 'description', 'category']

class NewsArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsArticle
        fields = ['id', 'title', 'date', 'summary', 'content']

class MediaItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = MediaItem
        fields = ['id', 'type', 'url', 'title']

class ContactSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactSubmission
        fields = ['name', 'email', 'message', 'date_submitted']
