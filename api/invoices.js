const invoices = [
  {
    id: "INV-1001",
    customer: "Acme Logistics",
    amount: 1820.5,
    status: "Paid",
    dueDate: "2026-05-10",
  },
  {
    id: "INV-1002",
    customer: "Global Freight",
    amount: 928.75,
    status: "Pending",
    dueDate: "2026-05-22",
  },
];

export default function handler(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ invoices }));
}
