var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet1.txt', 'utf8');
console.log(greet);

var greet2 = fs.readFile(__dirname + '/greet2.txt', 'utf8', 
	function(err, data){
		console.log(data);
	});

console.log("Line 11 of code just ran ...");