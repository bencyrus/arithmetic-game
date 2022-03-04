from django.shortcuts import render
from .models import QuestionSet

def game(request):
    return render(request, 'gamesettings/index.html')

def gametime(request):
    if request.method == 'POST':
        questionSet = QuestionSet()

        questionSet.duration = int(request.POST["duration"])

        if "sum" in request.POST:
            questionSet.addExists = True
            questionSet.rangeAddNum11 = int(request.POST["sum-1-min"])
            questionSet.rangeAddNum12 = int(request.POST["sum-1-max"])
            questionSet.rangeAddNum21 = int(request.POST["sum-2-min"])
            questionSet.rangeAddNum22 = int(request.POST["sum-2-max"])

        if "com" in request.POST:
            questionSet.mulsExists = True
            questionSet.rangeMulNum11 = int(request.POST["com-1-min"])
            questionSet.rangeMulNum12 = int(request.POST["com-1-max"])
            questionSet.rangeMulNum21 = int(request.POST["com-2-min"])
            questionSet.rangeMulNum22 = int(request.POST["com-2-max"])

        questionSet.questions = {'questions': questionSet.QBuilder()}

        questionSet.save()
        context = {'duration': questionSet.duration, 'questions': questionSet.questions['questions']}
        # serializer_class = QuestionsListSerializer(questionSet, context)
        return render(request, 'gamesettings/gametime.html', context)

    return render(request, 'gamesettings/index.html')
