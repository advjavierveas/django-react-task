from rest_framework import viewsets
from .models import tasksModel
from .serializers import taskSerializer

# Create your viewsets here.

class taskViewset(viewsets.ModelViewSet):
    serializer_class = taskSerializer
    queryset = tasksModel.objects.all()