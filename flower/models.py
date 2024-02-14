from django.db import models
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

User = get_user_model()


class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=150, blank=True, null=True)
    mobile = models.CharField(max_length=12)
    address = models.TextField(blank=True, null=True)
    username = models.CharField(max_length=150, unique=True, blank=True, null=True)

    def __str__(self):
        return self.user.email


@receiver(post_save, sender=User)
def createCustomer(sender, instance, created, *args, **kwargs):
    if created:
        Customer.objects.create(user=instance)
        Token.objects.create(user=instance)


@receiver(post_save, sender=Customer)
def createUsername(sender, instance, created, *args, **kwargs):
    if created:
        instance.username = f"customer{instance.id}"
        instance.save()


class Category(models.Model):
    title = models.CharField(max_length=150)
    image = models.ImageField(upload_to="category/", blank=True, null=True)
    details = models.TextField(blank=True, null=True)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


# class Brand(models.Model):
#     title = models.CharField(max_length=150)
#     logo = models.ImageField(upload_to="logo/", blank=True, null=True)
#     details = models.TextField(blank=True, null=True)
#     date = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return self.title


class Flower(models.Model):
    title = models.CharField(max_length=150)
    image = models.ImageField(upload_to="flower/")
    oldprice = models.PositiveIntegerField(blank=True, null=True)
    price = models.PositiveIntegerField()
    discount = models.PositiveIntegerField(blank=True, null=True)
    category = models.ManyToManyField(Category)
    # brand = models.ForeignKey(Brand, on_delete=models.CASCADE, blank=True, null=True)
    details = models.TextField()
    tegs = models.TextField(blank=True, null=True)
    time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class FlowerView(models.Model):
    flower = models.OneToOneField(Flower, on_delete=models.CASCADE)
    view = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.flower.title


class Review(models.Model):
    flower = models.ForeignKey(Flower, on_delete=models.CASCADE)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    title = models.TextField()


class Slider(models.Model):
    name = models.CharField(max_length=200)
    details = models.TextField()
    image = models.ImageField(upload_to="slider")
    url = models.TextField(default="#")
    flower = models.ForeignKey(Flower, on_delete=models.SET_NULL, blank=True, null=True)

    def __str__(self):
        return self.name


class ContactUs(models.Model):
    name = models.CharField(max_length=30)
    email = models.EmailField(max_length=50)
    address = models.CharField(max_length=100)
    phone = models.CharField(max_length=12)
    message = models.TextField()

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Contact Us"


class TrendingProduct(models.Model):
    flowers = models.ForeignKey(Flower, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)


class Cart(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    total = models.PositiveIntegerField()
    complit = models.BooleanField(default=False)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.customer.user.email


class CartFlower(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    flower = models.ManyToManyField(Flower)
    quantity = models.PositiveIntegerField()
    total = models.PositiveIntegerField()


ORDER_STATUS = (
    ("Order Received", "Order Received"),
    ("Order Processing", "Order Processing"),
    ("On the way", "On the way"),
    ("Order Completed", "Order Completed"),
    ("Order Canceled", "Order Canceled"),
)


class Order(models.Model):
    cart = models.OneToOneField(Cart, on_delete=models.CASCADE)
    name = models.CharField(max_length=150)
    mobile = models.CharField(max_length=16)
    address = models.TextField()
    email = models.CharField(max_length=160)
    order_status = models.CharField(
        max_length=100, choices=ORDER_STATUS, default="Order Received"
    )
    date = models.DateTimeField(auto_now_add=True)
