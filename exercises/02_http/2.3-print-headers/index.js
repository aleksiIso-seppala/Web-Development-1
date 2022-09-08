const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(function(request, response) {
  var body = JSON.stringify(request.headers);
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(body);
  response.end();
}).listen(3000);