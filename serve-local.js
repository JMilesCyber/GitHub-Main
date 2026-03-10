const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT ? Number(process.env.PORT) : 8080;
const root = path.join(process.cwd(), "docs");

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

http
  .createServer((req, res) => {
    let reqPath = decodeURIComponent((req.url || "/").split("?")[0]);
    if (reqPath === "/") reqPath = "/index.html";

    const filePath = path.join(root, reqPath);
    if (!filePath.startsWith(root)) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("Not found");
        return;
      }
      const contentType =
        mimeTypes[path.extname(filePath).toLowerCase()] ||
        "application/octet-stream";
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    });
  })
  .listen(port, "127.0.0.1", () => {
    console.log(`Serving docs at http://127.0.0.1:${port}`);
  });
