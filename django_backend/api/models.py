from django.db import models

class Biography(models.Model):
    name = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    full_bio = models.TextField()
    leadership_philosophy = models.TextField()

    def __str__(self):
        return self.name

class Education(models.Model):
    biography = models.ForeignKey(Biography, related_name='education', on_delete=models.CASCADE)
    degree = models.CharField(max_length=255)
    institution = models.CharField(max_length=255)
    period = models.CharField(max_length=50)

class TimelineItem(models.Model):
    biography = models.ForeignKey(Biography, related_name='timeline', on_delete=models.CASCADE)
    period = models.CharField(max_length=50)
    role = models.CharField(max_length=255)
    organization = models.CharField(max_length=255)

class Achievement(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    category = models.CharField(max_length=100)

    def __str__(self):
        return self.title

class NewsArticle(models.Model):
    title = models.CharField(max_length=255)
    date = models.DateField()
    summary = models.TextField()
    content = models.TextField()

    def __str__(self):
        return self.title

class MediaItem(models.Model):
    MEDIA_TYPES = (
        ('image', 'Image'),
        ('video', 'Video'),
    )
    type = models.CharField(max_length=10, choices=MEDIA_TYPES)
    url = models.URLField()
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title

class ContactSubmission(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    message = models.TextField()
    date_submitted = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name} on {self.date_submitted}"
