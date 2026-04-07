# Django Backend Equivalent for Eng. Hashem Bin Auf - Personal Website

This directory contains the equivalent Django code for the backend API.

## 📂 Folder Structure

- `hashem_website/`: Django project settings.
- `api/`: Django app for the REST API.
  - `models.py`: Database models for Biography, Achievement, News, Media, and Contact.
  - `serializers.py`: DRF serializers for the models.
  - `views.py`: DRF viewsets for the API endpoints.
  - `urls.py`: URL patterns for the API.

## ⚙️ Running Locally (Django)

### 1. Install Dependencies
```bash
pip install django djangorestframework django-cors-headers
```

### 2. Create Project
```bash
django-admin startproject hashem_website
cd hashem_website
python manage.py startapp api
```

### 3. Apply Migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

### 4. Start Server
```bash
python manage.py runserver
```
The API will be available at `http://localhost:8000/api/`.

## 🔌 API Endpoints

- `GET /api/biography/`: Returns the biography.
- `GET /api/achievements/`: Returns the list of achievements.
- `GET /api/news/`: Returns the latest news.
- `GET /api/media/`: Returns the media gallery.
- `POST /api/contact/`: Submits a contact form.
