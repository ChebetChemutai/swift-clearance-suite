const shipments = [
  {
    id: "SHIP-001",
    origin: "Nairobi",
    destination: "Mombasa",
    status: "In transit",
    expectedDelivery: "2026-05-20",
  },
  {
    id: "SHIP-002",
    origin: "Nairobi",
    destination: "Kampala",
    status: "Customs clearance",
    expectedDelivery: "2026-05-24",
  },
];

export default function handler(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ shipments }));
}
