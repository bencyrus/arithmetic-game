from multiprocessing import context
from django.shortcuts import render
from rest_framework import generics
from .models import QuestionSet
from .serializers import QuestionsListSerializer

def game(request):
    return render(request, 'gamesettings/index.html')

def gametime(request):
    if request.method == 'POST':
        questionList = QuestionSet()
        questionList.duration = request.POST["duration"]
        questionList.duration = request.POST["duration"]
        # return render(request, questionList)
        # questionList.questions = questionList.generateQuestion()
        questionList.save()
        context = {"qList": questionList}
        serializer_class = QuestionsListSerializer(questionList, context)
        return render(request, 'gamesettings/gametime.html')

    return render(request, 'gamesettings/index.html')


class QuestionsListView(generics.ListCreateAPIView):
    queryset = QuestionSet.objects.all()
    serializer_class = QuestionsListSerializer