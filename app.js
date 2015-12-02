function greet(callback){
	console.log("Hello");
	var param = {
		name: "John Doe"
	}
	callback(param);
}

greet(function(param){
	console.log("The callback was invoked by " + param);
	console.log(param);
});

greet(function(param){
	console.log("Callback2 was invoked by" + param.name);
});