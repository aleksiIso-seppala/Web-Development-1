const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(function(request, response) {

  //TODO: implement sending responds to requests for XML, TXT, and */* below, handling JSON provided as an example.
  if(request.url === '/classical'){
    response.statusCode = 200;
    readFileSendResponse('homer.html','text/html',response);
  }
  else if(request.url === '/dystopy'){
    response.statusCode= 200;
    readFileSendResponse('bradbury.html','text/html',response);
  }
  else if(request.url === '/'){
    response.statusCode = 200;
    readFileSendResponse('index.html','text/html',response);
  }
  else{
    response.statusCode = 404;
    response.statusMessage = 'Requested content not found';
    response.end();
  }
}).listen(3000);

const readFileSendResponse = (fileName, contentType, response) => {
  fs.readFile(path.resolve(fileName), function(error, file) {
    if (error) {
      response.writeHead(404);
      response.write('An error occured: ', error);
    } else {
      response.writeHead(200, { 'Content-Type': contentType });
      response.write(file);
    }
    response.end();
  })
}