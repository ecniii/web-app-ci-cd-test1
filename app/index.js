const express = require('express');
const client = require('prom-client');
const app = express();
const port = 3000;

// Create a Prometheus counter
const counter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests'
});

// HTML homepage
app.get('/', (req, res) => {
  counter.inc(); // increment counter
  res.set('Content-Type', 'text/html');
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="UTF-8"><title>Hello</title></head>
    <body><h1>CI/CD Architecture</h1></body>
    </html>
  `);
});

// Prometheus metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
