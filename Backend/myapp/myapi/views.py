from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import User, Event
from .serializers import UserSerializer, EventSerializer

class UserListCreate(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class EventListCreate(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
