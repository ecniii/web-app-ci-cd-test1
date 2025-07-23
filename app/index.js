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
          flex-direction: column;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        nav {
          width: 100vw;
          background: #2d3748;
          padding: 1rem 0;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          display: flex;
          justify-content: center;
        }
        .menu {
          display: flex;
          gap: 2rem;
        }
        .menu a {
          color: #fff;
          text-decoration: none;
          font-size: 1.1rem;
          font-family: 'Segoe UI', Arial, sans-serif;
          transition: color 0.2s;
        }
        .menu a:hover {
          color: #63b3ed;
        }
        .message {
          font-family: 'Segoe UI', Arial, sans-serif;
          font-size: 2rem;
          color: #2d3748;
          background: #fff;
          padding: 2rem 3rem;
          border-radius: 1rem;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
          margin-top: 4rem;
        }
      </style>
    </head>
    <body>
      <nav>
        <div class="menu">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Cart</a>
          <a href="#">Contact</a>
        </div>
      </nav>
      <div class="message">Hello from Kubernetes!</div>
    </body>
    </html>
  `);
}).listen(3000);
