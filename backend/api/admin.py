from django.contrib import admin
from .models import Shipment


@admin.register(Shipment)
class ShipmentAdmin(admin.ModelAdmin):
    list_display = ("tracking_id", "origin", "destination", "mode", "status", "eta", "customer", "created_at")
    search_fields = ("tracking_id", "origin", "destination", "customer", "status")
    list_filter = ("mode", "status")
