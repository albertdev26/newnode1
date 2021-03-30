const http = require('http');
const port = 323;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node demo albert!\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://10.0.9.132:${port}/`);
});
