from rest_framework import status, viewsets
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .models import Shipment
from .serializers import ShipmentSerializer


class ShipmentViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Shipment.objects.order_by("-created_at")
    serializer_class = ShipmentSerializer


@api_view(["POST"])
@permission_classes([AllowAny])
def estimate(request):
    origin = request.data.get("origin", "Nairobi")
    destination = request.data.get("destination", "Mombasa")
    weight_kg = float(request.data.get("weightKg", 1000))
    mode = request.data.get("mode", "ocean")

    mode_factor = {
        "ocean": 1.0,
        "air": 1.8,
        "road": 1.2,
    }.get(mode, 1.0)

    distance_factor = 1 + (len(origin) + len(destination)) * 0.002
    estimated_cost = round((weight_kg * 0.05) * mode_factor * distance_factor + 75, 2)

    return Response(
        {
            "origin": origin,
            "destination": destination,
            "weightKg": weight_kg,
            "mode": mode,
            "estimatedCost": estimated_cost,
            "currency": "USD",
            "message": "HolivET Africa estimate calculated using your shipment details.",
        },
        status=status.HTTP_200_OK,
    )


@api_view(["GET"])
@permission_classes([AllowAny])
def status_view(request):
    return Response(
        {
            "status": "ok",
            "service": "HolivET Africa API",
            "uptime": "stable",
            "version": "1.0",
        },
        status=status.HTTP_200_OK,
    )
