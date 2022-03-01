from django.shortcuts import render
from rest_framework import generics
from .models import QuestionsList
from .serializers import QuestionsListSerializer

def game(request):
    return render(request, 'gamesettings/index.html')

def gametime(request):
    return render(request, 'gamesettings/gametime.html')


class QuestionsListView(generics.ListCreateAPIView):
    queryset = QuestionsList.objects.all()
    serializer_class = QuestionsListSerializer