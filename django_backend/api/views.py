from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Biography, Achievement, NewsArticle, MediaItem, ContactSubmission
from .serializers import BiographySerializer, AchievementSerializer, NewsArticleSerializer, MediaItemSerializer, ContactSubmissionSerializer

class BiographyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Biography.objects.all()
    serializer_class = BiographySerializer

    def list(self, request):
        # Return the first biography found
        biography = self.queryset.first()
        if biography:
            serializer = self.get_serializer(biography)
            return Response(serializer.data)
        return Response({"error": "Biography not found"}, status=status.HTTP_404_NOT_FOUND)

class AchievementViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Achievement.objects.all()
    serializer_class = AchievementSerializer

class NewsArticleViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = NewsArticle.objects.all().order_by('-date')
    serializer_class = NewsArticleSerializer

class MediaItemViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = MediaItem.objects.all()
    serializer_class = MediaItemSerializer

class ContactSubmissionViewSet(viewsets.ModelViewSet):
    queryset = ContactSubmission.objects.all()
    serializer_class = ContactSubmissionSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response({"status": "success", "message": "Message received"}, status=status.HTTP_201_CREATED)
