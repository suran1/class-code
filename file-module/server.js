var http = require('http');

var fileIO = require('./file-io');

var server = http.createServer(function(req, res){
fileIO.createDir('/temp');
  fileIO.createFile('./temp/number.txt', 'my Magic Number:\n');
  fileIO.appendToFile('./temp/number.txt', (Math.random() * 10).toString());
  res.write(fileIO.readFile('./temp/number.txt'));
  res.end();

});

server.listen(3000);
console.log('Server running on port 3000...');
