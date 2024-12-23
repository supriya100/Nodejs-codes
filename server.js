
const http = require('http');


const PORT = 3000;


const server = http.createServer((req, res) => {

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  
  res.end('Hello, Node.js!\n');
});

// Start the server and listen on the specified port
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
