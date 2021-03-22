const http = require('http');
const port = process.env.PORT || 80;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node demo albert!\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://52.255.236.178:${port}/`);
});
