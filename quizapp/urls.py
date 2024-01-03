"""
URL configuration for quizapp project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from myapp import views
from django.conf import settings
from django.conf.urls.static import static

# from .views import *

urlpatterns = [
    path('',views.Home,name='home'),
    path('login',views.loginpage,name='login'),
    path('registerpage',views.registerpage,name='registerpage'),
    path('dashboard',views.dashboard,name='dashboard'),
    path('quiz1',views.quiz1,name='quiz1'),
    path('quiz2',views.quiz2,name='quiz2'),
    path('quiz3',views.quiz3,name='quiz3'),
    path('quiz4',views.quiz4,name='quiz4'),
    path('quiz5',views.quiz5,name='quiz5'),
    path('quiz6',views.quiz6,name='quiz6'),
    path('quiz7',views.quiz7,name='quiz7'),
    path('quiz8',views.quiz8,name='quiz8'),
    path('leaderboard',views.leaderboard,name='leaderboard'),
    path('profile',views.profile,name='profile'),
    path('profile_edit',views.profile_edit,name='profile_edit'),
    # path('confirm',views.confirm,name='confirm'),
    # path('delete',views.delete,name='delete'),
    path('terms_conditions',views.terms_conditions,name='terms_conditions'),
    path('contact_us',views.contact_us,name='contact_us'),
    path('blog',views.blog,name='blog'),
    path('about',views.about,name='about'),
    # path('admin_dashboard',views.admin_dashboard,name='admin_dashboard'),
    path('dashboard_total',views.dashboard_total,name='dashboard_total'),
    path('logout',views.logoutpage,name='logout'),
    path('admin/', admin.site.urls),
]


urlpatterns+=static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)