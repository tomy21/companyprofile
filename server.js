const express = require("express");
const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");

const app = express();

// Middleware untuk melayani file statis dari direktori public
app.use(express.static(path.join(__dirname, "public")));

// Sertifikat SSL
const privateKey = fs.readFileSync(path.join(__dirname, "private.key"), "utf8");
const certificate = fs.readFileSync(
  path.join(__dirname, "certificate.crt"),
  "utf8"
);
const credentials = { key: privateKey, cert: certificate };

// Mulai server HTTP di port 80 dan redirect ke HTTPS
const httpServer = http.createServer((req, res) => {
  res.writeHead(301, { Location: `https://${req.headers.host}${req.url}` });
  res.end();
});
httpServer.listen(80, () => {
  console.log("HTTP Server running on port 80");
});

// Mulai server HTTPS di port 443
const httpsServer = https.createServer(credentials, app);
httpsServer.listen(443, () => {
  console.log("HTTPS Server running on port 443");
});
