from rest_framework import serializers
from .models import tasksModel
class taskSerializer(serializers.ModelSerializer):
    class Meta:
        model = tasksModel
        fields = ['id', 'title', 'description', 'status']