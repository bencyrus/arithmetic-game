from random import randrange
from django.db import models

class QuestionSet(models.Model):
    addExists = models.BooleanField(default=False)
    rangeAddNum11 = models.IntegerField(null=True)
    rangeAddNum12 = models.IntegerField(null=True)
    rangeAddNum21 = models.IntegerField(null=True)
    rangeAddNum22 = models.IntegerField(null=True)

    mulsExists = models.BooleanField(default=False)
    rangeMulNum11 = models.IntegerField(null=True)
    rangeMulNum12 = models.IntegerField(null=True)
    rangeMulNum21 = models.IntegerField(null=True)
    rangeMulNum22 = models.IntegerField(null=True)
    
    duration = models.IntegerField()

    # Must change variable name to something else as it includes duration too
    questions = models.JSONField(null=True)

    def __str__(self):
        return 'Question List {}'.format(self.id)


    def numGnerator(self, min1, max1, min2, max2, sign):
        num1 = randrange(min1, max1, 1)
        num2 = randrange(min2, max2, 1)

        if sign == 1:
            if num1 < num2:
                num1, num2 = num2, num1

        if sign == 3:
            num1 = 3
            num2 = 2

            while num1 % num2 != 0:
                num1 = randrange(self.rangeMulNum11, self.rangeMulNum12, 1)
                num2 = randrange(self.rangeMulNum21, self.rangeMulNum22, 1)

                if num1 < num2:
                    num1, num2 = num2, num1

        return num1, num2

    def genQSet(self, sign):
        if sign == 0:
            num1, num2 = self.numGnerator(self.rangeAddNum11, self.rangeAddNum12, self.rangeAddNum21, self.rangeAddNum22, sign)

            return [num1, num2, '+', (num1 + num2)]

        elif sign == 1:
            num1, num2 = self.numGnerator(self.rangeAddNum11, self.rangeAddNum12, self.rangeAddNum21, self.rangeAddNum22, sign)

            return [num1, num2, '-', (num1 - num2)]

        elif sign == 2:
            num1, num2 = self.numGnerator(self.rangeMulNum11, self.rangeMulNum12, self.rangeMulNum21, self.rangeMulNum22, sign)

            return [num1, num2, '×', (num1 * num2)]
        else:
            num1, num2 = self.numGnerator(self.rangeMulNum11, self.rangeMulNum12, self.rangeMulNum21, self.rangeMulNum22, sign)

            return [num1, num2, '÷', int((num1 / num2))]
    
    def QBuilder(self):
        questionList = []
        for i in range(self.duration * 2):
            if self.addExists and self.mulsExists:
                sign = randrange(0, 4, 1)
                questionList.append(self.genQSet(sign))

            elif self.addExists:
                sign = randrange(0, 2, 1)
                questionList.append(self.genQSet(sign))

            else:
                sign = randrange(2, 4, 1)
                questionList.append(self.genQSet(sign))
        return questionList
    
    

        # Recipe:
        # For each of the checked fields, randomly generate questions based on number range
        # add each question to a question list with length drations * 120
        # return the questionlist



    # oSign = models.CharField(max_length=1)
    # answer = models.IntegerField() 