import { useQuery } from "@tanstack/react-query";
import { apiUrl } from "@/lib/api";
import { authHeaders } from "@/lib/auth";

export type Shipment = {
  id: string;
  route: string;
  mode: string;
  eta: string;
  status: string;
  tone: string;
  tracking_id: string;
  tracking_url: string;
  customer: string;
  origin: string;
  destination: string;
};

async function fetchShipments() {
  const res = await fetch(apiUrl("/api/admin/shipments/"), {
    headers: {
      "Content-Type": "application/json",
      ...authHeaders(),
    },
  });
  if (!res.ok) {
    throw new Error("Unable to load shipment data");
  }
  const payload = await res.json();
  return payload as Shipment[];
}

export function useShipments() {
  return useQuery<Shipment[], Error>(["shipments"], fetchShipments, {
    staleTime: 1000 * 60,
    retry: 1,
  });
}
