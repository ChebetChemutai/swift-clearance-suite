const shipments = [
  {
    id: "MSKU7821934",
    route: "Shanghai → Nairobi ICD",
    mode: "Ocean",
    eta: "May 20",
    status: "In transit",
    tone: "bg-accent/15 text-accent-foreground",
    trackingId: "MSKU7821934",
    trackingUrl: "https://www.17track.net/en#nums=MSKU7821934",
    customer: "Sahara Foods Ltd",
  },
  {
    id: "AWB-176-44218",
    route: "Guangzhou → JKIA",
    mode: "Air",
    eta: "May 08",
    status: "Customs assessment",
    tone: "bg-primary/10 text-primary",
    trackingId: "AWB17644218",
    trackingUrl: "https://www.17track.net/en#nums=AWB17644218",
    customer: "Vital Pharma Ltd",
  },
];

export default function handler(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ shipments }));
}
