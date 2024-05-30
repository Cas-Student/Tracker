import express from 'express';
import http from 'node:http'

const app = express(http.createServer());

app.get('/', (req, res) => {
  const ip = req.get('X-Forwarded-For');
  console.log("\n");
  console.log("At: " + Date());
  console.log("ROOT IP: " + ip);
  window.location.href = "https://start.hcps.org";
  res.end();
});
