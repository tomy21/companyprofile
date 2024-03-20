const express = require("express");
const https = require("https");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 443;

app.use(express.static(path.join(__dirname, "public")));

https
  .createServer(
    {
      key: fs.readFileSync(path.join(__dirname, "private.key")),
      cert: fs.readFileSync(path.join(__dirname, "certificate.crt")),
    },
    app
  )
  .listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
