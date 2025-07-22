const http = require('http');
http.createServer((_, res) => {
  res.end("Hello from Kubernetes!");
}).listen(3000);
