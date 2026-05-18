from django.db import models


class Shipment(models.Model):
    tracking_id = models.CharField(max_length=64, unique=True)
    origin = models.CharField(max_length=128)
    destination = models.CharField(max_length=128)
    mode = models.CharField(max_length=32)
    status = models.CharField(max_length=64)
    eta = models.CharField(max_length=64)
    customer = models.CharField(max_length=128)
    created_at = models.DateTimeField(auto_now_add=True)

    @property
    def route(self):
        return f"{self.origin} → {self.destination}"

    def __str__(self):
        return f"{self.tracking_id} — {self.route}"
