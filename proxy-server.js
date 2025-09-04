const http = require('http');
const httpProxy = require('http-proxy');

// Create a proxy server
const proxy = httpProxy.createProxyServer({});

// Create your own server and have it forward requests
const server = http.createServer((req, res) => {
  // Target server to proxy to, e.g., http://example.com
  const target = 'http://example.com';

  proxy.web(req, res, { target }, (err) => {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Something went wrong with the proxy.');
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});