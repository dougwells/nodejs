// grabs http object from Node & fs for handling files (html)
var http = require('http');
var fs = require('fs');

//sends name/value pair for data type
//ends with line break which is good practice
http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type": "application/json"});
	var testData = {
		firstname: "John",
		lastname: "Doe"
	};
	res.end(JSON.stringify(testData));

}).listen(1337, '127.0.0.1');