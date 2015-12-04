var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
	
	//Routing ... cumbersome to do manually but it can be done
	if(req.url ==='/'){
		var htm = fs.createReadStream('./index.htm');
		htm.pipe(res);
	}
	
	else if(req.url ==="/api"){
		res.writeHead(200, {"Content-Type": "application/json"});
		var testData = {
			firstname: "Jane",
			lastname: "Doe"
		};
		res.end(JSON.stringify(testData));
		
//only run below error message if not an existing URL
	}else{
		res.writeHead(404);
		res.end("404: Didi didi didi - Thats all folks!");
	}

//server is listening on localhost: 1337
}).listen(1337, '127.0.0.1');