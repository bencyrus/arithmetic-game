from rest_framework import serializers
from .models import QuestionSet

class QuestionsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionSet
        fields = [
            "addExists",
            "rangeAddNum12",
            "rangeAddNum21",
            "rangeAddNum11",
            "rangeAddNum22",
            "mulsExists",
            "rangeMulNum12",
            "rangeMulNum21",
            "rangeMulNum11",
            "rangeMulNum22",
            "duration",
        ]
        