# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.views import generic
from .models import Rides
from rest_framework.views import APIView
from .serializers import RidesSerializer
from rest_framework.response import Response
from django.conf import settings
from django.views.generic import TemplateView, View
from django.shortcuts import render
# from django.views import generic


class IndexView(generic.ListView):
    template_name = 'index.html'
    context_object_name = 'ride'

    def get_queryset(self):
        return Rides.objects.all()


class DetailView(generic.DetailView):
    model = Rides
    template_name = 'coster/detail.html'


class RidesList(APIView):

    def get(self, request):
        rides = Rides.objects.all()
        serializer = RidesSerializer(rides, many=True)

        return Response(serializer.data)

    def post(self):
        pass


class AngularApp(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super(AngularApp, self).get_context_data(**kwargs)
        context['ANGULAR_URL'] = settings.ANGULAR_URL
        return context


# class NgTemplateView(generic.ListView):
#     template_name = 'djangoT.html'
#     context_object_name = 'ride'

#     def get_queryset(self):
#         return Rides.objects.all()


class NgTemplateView(View):
    """View to render django template to angular"""

    def get(self, request):
        context = Rides.objects.all()
        for rd in context:
            aa = {
                'name': rd.name,
                'danger_rate': rd.danger_rate,
                'danger': rd.danger,
                'age_limit': rd.age_limit,
                'price': rd.price
            }
        # context_object_name = 'ride'
        return render(request, 'djangoT.html', aa)
