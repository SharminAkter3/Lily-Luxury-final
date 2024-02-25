from django.contrib import admin
from django.urls import path
from .views import *


urlpatterns = [
    path("categoryproducts/", CategoryProductView.as_view()),
    path("categories/", CategorisView.as_view()),
    path("singlecategories/<int:pk>/", SingleCategoryView.as_view()),
    path("singleflower/<int:pk>/", SingleProductView.as_view()),
    path("trandingflower/", TrandingProductsView.as_view()),
]
