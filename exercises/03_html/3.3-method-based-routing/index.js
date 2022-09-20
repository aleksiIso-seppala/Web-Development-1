const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(function(request, response) {

    if(request.method == 'GET'){
        response.statusCode = 200;
        readFileSendResponse('get.html','text/html',response);
    }
    else if(request.method =='POST'){
        response.statusCode = 200;
        readFileSendResponse('post.html','text/html',response);
    }
    else{
        response.statusCode = 405;
        response.setHeader("Allow: GET, POST");
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