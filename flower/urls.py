from django.contrib import admin
from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from .views import *


urlpatterns = [
    path("categoryproducts/", CategoryProductView.as_view()),
    path("categories/", CategorisView.as_view()),
    path("singlecategories/<int:pk>/", SingleCategoryView.as_view()),
    path("singleflower/<int:pk>/", SingleProductView.as_view()),
    path("trandingflower/", TrandingProductsView.as_view()),
    path("sliders/", SliderView.as_view()),
    path("addflowerview/", AddViewProduct.as_view()),
    path("most_views_flower/", MostViewsProducts.as_view()),
    path("search/<str:q>/", SearchView.as_view()),
    path("profile/", ProfileView.as_view()),
    path("register/", RegisterUserView.as_view()),
    path("apilogin/", obtain_auth_token),
]
