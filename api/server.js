import server from "../dist/server/server.js";

export default async function handler(req, res) {
  const host = req.headers.host ?? "localhost";
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const url = new URL(req.url ?? "/", `${protocol}://${host}`);

  const request = new Request(url.toString(), {
    method: req.method,
    headers: req.headers,
    body: req.method === "GET" || req.method === "HEAD" ? undefined : req,
  });

  const response = await server.fetch(request, {}, {});

  res.statusCode = response.status;
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  const buffer = response.body ? Buffer.from(await response.arrayBuffer()) : undefined;
  if (buffer) {
    res.end(buffer);
  } else {
    res.end();
  }
}
