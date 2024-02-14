from django.contrib import admin
from .models import (
    Customer,
    Category,
    Flower,
    FlowerView,
    Review,
    Slider,
    ContactUs,
    TrendingProduct,
    Cart,
    CartFlower,
    Order,
)

# Register your models here.

admin.site.register(
    [
        Customer,
        Category,
        Flower,
        FlowerView,
        Review,
        Slider,
        ContactUs,
        TrendingProduct,
        Cart,
        CartFlower,
        Order,
    ]
)
