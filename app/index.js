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
          flex-wrap: wrap;
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
      <script>
        function toggleSidebar() {
          document.body.classList.toggle('sidebar-open');
        }
        function toggleDropdown() {
          document.getElementById('dropdown-content').classList.toggle('show');
        }
        window.onclick = function(event) {
          if (!event.target.matches('.dropdown-btn')) {
            var dropdowns = document.getElementsByClassName('dropdown-content');
            for (var i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
              }
            }
          }
        }
      </script>
      <style>
        .sidebar-toggle {
          position: fixed;
          top: 1.5rem;
          left: 1.5rem;
          z-index: 1100;
          background: #2d3748;
          color: #fff;
          border: none;
          border-radius: 50%;
          width: 44px;
          height: 44px;
          font-size: 1.5rem;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        .sidebar {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 260px;
          background: #fff;
          box-shadow: 2px 0 12px rgba(0,0,0,0.08);
          transform: translateX(-100%);
          transition: transform 0.3s;
          z-index: 1050;
          display: flex;
          flex-direction: column;
          padding-top: 4rem;
        }
        .sidebar-open .sidebar {
          transform: translateX(0);
        }
        .sidebar .sidebar-menu {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 2rem;
        }
        .sidebar .sidebar-menu a {
          color: #2d3748;
          text-decoration: none;
          font-size: 1.1rem;
          font-family: 'Segoe UI', Arial, sans-serif;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          transition: background 0.2s;
        }
        .sidebar .sidebar-menu a:hover {
          background: #f0f4f8;
        }
        .dropdown {
          position: relative;
        }
        .dropdown-btn {
          background: none;
          border: none;
          color: #2d3748;
          font-size: 1.1rem;
          font-family: 'Segoe UI', Arial, sans-serif;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          cursor: pointer;
          width: 100%;
          text-align: left;
        }
        .dropdown-btn:after {
          content: '▼';
          float: right;
          margin-left: 0.5rem;
          font-size: 0.8rem;
        }
        .dropdown-content {
          display: none;
          flex-direction: column;
          background: #f0f4f8;
          border-radius: 0.5rem;
          margin-top: 0.2rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .dropdown-content.show {
          display: flex;
        }
        .dropdown-content a {
          padding: 0.5rem 1.5rem;
          font-size: 1rem;
        }
        @media (max-width: 600px) {
          .sidebar {
            width: 80vw;
          }
        }
      </style>
    </head>
    <body>
      <button class="sidebar-toggle" onclick="toggleSidebar()">&#9776;</button>
      <aside class="sidebar">
        <div class="sidebar-menu">
          <a href="#">Home</a>
          <div class="dropdown">
            <button class="dropdown-btn" onclick="toggleDropdown()">Shop</button>
            <div class="dropdown-content" id="dropdown-content">
              <a href="#">Products</a>
              <a href="#">Categories</a>
              <a href="#">Deals</a>
              <a href="#">New Arrivals</a>
              <a href="#">Best Sellers</a>
            </div>
          </div>
          <a href="#">Cart</a>
          <a href="#">Orders</a>
          <a href="#">Account</a>
          <a href="#">Contact</a>
        </div>
      </aside>
      <nav>
        <!-- Top nav is now empty or can be used for branding -->
      </nav>
      <div class="message">CI/CD Architecture</div>
    </body>
    </html>
  `);
}).listen(3000);
