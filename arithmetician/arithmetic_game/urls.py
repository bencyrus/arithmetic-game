from django.urls import path
from . import views

urlpatterns = [
    path('game1/', views.game),
    path('questions/', views.QuestionsListView.as_view()),
]