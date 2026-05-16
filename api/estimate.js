const parseJsonBody = async (req) => {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  const body = Buffer.concat(chunks).toString();
  return body ? JSON.parse(body) : {};
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Allow", "POST");
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  const data = await parseJsonBody(req);
  const { origin, destination, weightKg = 0 } = data;
  const baseRate = 15;
  const distanceFactor = 1 + Math.random() * 0.2;
  const estimatedCost = Math.round((baseRate * weightKg * distanceFactor + 100) * 100) / 100;

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      origin,
      destination,
      weightKg,
      estimatedCost,
      currency: "USD",
      message: "This is a sample estimate. Replace with your pricing engine to use real data.",
    }),
  );
}
