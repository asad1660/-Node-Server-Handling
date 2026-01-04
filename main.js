const http = require("http");

const htmlContent = `<html><header>First Node Response</header>
<body>
<p>Hello from node js </p>
</body>
</html>
`;

const server = http.createServer((request, response) => {
  response.write(htmlContent);
});

server.listen(3000);
