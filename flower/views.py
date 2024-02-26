from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Q
from .models import *
from .serializers import *
from django.utils import timezone
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication


class CategoryProductView(APIView):
    def get(self, request):
        category_obj = Category.objects.all()
        category_serializer = CategorySerializer(category_obj, many=True).data
        data = []
        for cata in category_serializer:
            flower_obj = Flower.objects.filter(category=cata["id"])
            cata["flowers"] = FlowerSerializer(
                flower_obj, many=True, context={"request": request}
            ).data
            data.append(cata)
        return Response(data)


class SingleCategoryView(APIView):
    def get(self, request, pk):
        category_obj = Category.objects.filter(id=pk)
        category_serializer = CategorySerializer(
            category_obj, many=True, context={"request": request}
        ).data
        data = []
        for cata in category_serializer:
            product_obj = Flower.objects.filter(category=cata["id"])
            cata["flowers"] = FlowerSerializer(
                product_obj, many=True, context={"request": request}
            ).data
            data.append(cata)
        return Response(data)


class CategorisView(APIView):
    def get(self, request):
        categoris_obj = Category.objects.all()
        category_serializer = CategorySerializer(
            categoris_obj, many=True, context={"request": request}
        ).data
        return Response(category_serializer)


class SingleProductView(APIView):
    def get(self, request, pk):
        product_obj = Flower.objects.filter(id=pk)
        data = []

        product_serializer = SingleFlowerSerializer(
            product_obj, many=True, context={"request": request}
        ).data

        for prod in product_serializer:
            prod_view = FlowerView.objects.filter(flower=prod["id"]).first()
            # print("prod_view", prod_view)
            if prod_view:
                prod["view"] = prod_view.view
            else:
                prod["view"] = 0

            prod_review = Review.objects.filter(flower=prod["id"])
            prod_review_serializer = ReviewSerializer(prod_review, many=True).data
            prod["review"] = prod_review_serializer

            data.append(prod)
        return Response(data)


class TrandingProductsView(APIView):
    def get(self, request):
        products_obj = TrendingProduct.objects.all()
        product_serializer = TrendingProductSerializer(
            products_obj, many=True, context={"request": request}
        ).data
        return Response(product_serializer)


class SliderView(APIView):
    def get(self, request):
        slider_obj = Slider.objects.all()
        slider_serializer = SliderSerializer(
            slider_obj, many=True, context={"request": request}
        ).data
        return Response(slider_serializer)


class AddViewProduct(APIView):
    def post(self, request):
        p_id = request.data["id"]
        p_obj = Flower.objects.get(id=p_id)
        p_view_obj = FlowerView.objects.filter(flower=p_obj).first()
        if p_view_obj:
            p_view_obj.view += 1
            p_view_obj.save()
        else:
            FlowerView.objects.create(flower=p_obj, view=1)
        return Response({"error": False, "message": "Success"})


class MostViewsProducts(APIView):
    def get(self, request):
        p_obj = FlowerView.objects.all().order_by("-view")[:12]
        p_obj_data = ProductViewSerializer(
            p_obj, many=True, context={"request": request}
        ).data
        return Response(p_obj_data)


class SearchView(APIView):
    def get(self, request, q):
        data = {}
        posts_lookup = (
            Q(title__icontains=q)
            | Q(details__icontains=q)
            | Q(tegs__icontains=q)
            | Q(price__icontains=q)
        )
        prod_obj = Flower.objects.filter(time__lte=timezone.now()).filter(posts_lookup)
        data["flowers"] = FlowerSerializer(
            prod_obj, many=True, context={"request": request}
        ).data
        category_lookup = Q(title__icontains=q) | Q(details__icontains=q)
        category_obj = Category.objects.filter(date__lte=timezone.now()).filter(
            category_lookup
        )
        data["category"] = CategorySerializer(
            category_obj, many=True, context={"request": request}
        ).data

        print(prod_obj)
        return Response(data)


class ProfileView(APIView):
    permission_classes = [
        IsAuthenticated,
    ]
    authentication_classes = [
        TokenAuthentication,
    ]

    def get(self, request):
        customer_obj = Customer.objects.get(user=request.user)
        customer_ser = CustomerSerializer(customer_obj).data
        return Response(customer_ser)
