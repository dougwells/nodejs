// grabs http object from Node
var http = require('http');

//sends name/value pair for data type
//ends with line break which is good practice
http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.end("Hello World!! Dougs first WebServer Code!!\n");
	
// createServer has .listen function
//1337 is like 3000.  127.0.0.1 is standard internal ip for local system (same as localhost)
// localhost:1337.  Node server is listening at this port

}).listen(1337, '127.0.0.1');