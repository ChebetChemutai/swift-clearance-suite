from rest_framework import serializers
from .models import Shipment


class ShipmentSerializer(serializers.ModelSerializer):
    route = serializers.ReadOnlyField()
    tone = serializers.SerializerMethodField()
    tracking_url = serializers.SerializerMethodField()

    class Meta:
        model = Shipment
        fields = [
            "id",
            "tracking_id",
            "origin",
            "destination",
            "route",
            "mode",
            "status",
            "eta",
            "customer",
            "tone",
            "tracking_url",
        ]

    def get_tone(self, obj):
        """Return CSS class based on shipment status."""
        status_tones = {
            "pending": "bg-yellow-500/20 text-yellow-700",
            "in_transit": "bg-blue-500/20 text-blue-700",
            "delivered": "bg-green-500/20 text-green-700",
            "cancelled": "bg-red-500/20 text-red-700",
            "delayed": "bg-orange-500/20 text-orange-700",
        }
        return status_tones.get(obj.status, "bg-gray-500/20 text-gray-700")

    def get_tracking_url(self, obj):
        """Return tracking URL for shipment."""
        return f"/tracking/{obj.tracking_id}"
