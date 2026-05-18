from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token
from .views import ShipmentViewSet, estimate, status_view

router = DefaultRouter()
router.register(r"shipments", ShipmentViewSet, basename="shipment")

urlpatterns = [
    path("admin/", include(router.urls)),
    path("admin/login/", obtain_auth_token, name="admin-login"),
    path("estimate/", estimate, name="estimate"),
    path("status/", status_view, name="status"),
]
