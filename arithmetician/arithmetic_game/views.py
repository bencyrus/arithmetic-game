from multiprocessing import context
from django.shortcuts import render
from rest_framework import generics
from .models import QuestionSet
from .serializers import QuestionsListSerializer

def game(request):
    return render(request, 'gamesettings/index.html')

def gametime(request):
    if request.method == 'POST':
        questionSet = QuestionSet()

        questionSet.duration = request.POST["duration"]

        if "sum" in request.POST:
            questionSet.addExists = True
            questionSet.rangeAddNum11 = request.POST["sum-1-min"]
            questionSet.rangeAddNum12 = request.POST["sum-1-max"]
            questionSet.rangeAddNum21 = request.POST["sum-2-min"]
            questionSet.rangeAddNum22 = request.POST["sum-2-max"]

        if "com" in request.POST:
            questionSet.mulsExists = True
            questionSet.rangeMulNum11 = request.POST["com-1-min"]
            questionSet.rangeMulNum12 = request.POST["com-1-max"]
            questionSet.rangeMulNum21 = request.POST["com-2-min"]
            questionSet.rangeMulNum22 = request.POST["com-2-max"]

        questionSet.questions = {'questions': questionSet.QBuilder}

        questionSet.save()
        context = {"duration": questionSet.duration, "questions": questionSet.questions}
        # serializer_class = QuestionsListSerializer(questionSet, context)
        return render(request, 'gamesettings/test.html')

    return render(request, 'gamesettings/index.html')


class QuestionsListView(generics.ListCreateAPIView):
    queryset = QuestionSet.objects.all()
    serializer_class = QuestionsListSerializer