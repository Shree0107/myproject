from django.urls import path
from .views import UserListCreate, EventListCreate

urlpatterns = [
    path('users/', UserListCreate.as_view(), name='user-list'),
    path('events/', EventListCreate.as_view(), name='event-list'),
]
