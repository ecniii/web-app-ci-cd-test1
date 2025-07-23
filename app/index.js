const http = require('http');
http.createServer((_, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hello from Kubernetes!</title>
      <style>
        body {
          background: #f0f4f8;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .message {
          font-family: 'Segoe UI', Arial, sans-serif;
          font-size: 2rem;
          color: #2d3748;
          background: #fff;
          padding: 2rem 3rem;
          border-radius: 1rem;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
        }
      </style>
    </head>
    <body>
      <div class="message">Hello from Kubernetes!</div>
    </body>
    </html>
  `);
}).listen(3000);
