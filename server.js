const http = require("http");

const server = http.createServer((req, res) => {
  let userIp = req.headers["x-forwarded-for"]
    ? forwarded.split(",")[0]
    : req.connection.remoteAddress;

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    return res.end();
  }

  // Ваша основна логіка
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(userIp);
  } else {
    res.statusCode = 404;
    res.end("Page Not Found");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Сервер працює на http://localhost:${PORT}`);
});
