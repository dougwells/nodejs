//function statement
function greet(){
	console.log("Hello World!");
}
greet();

// funcitons are first-class.  Can pass fn as a parameter
function logGreeting(fn){
	fn();
}
logGreeting(greet);

//function expression
var greetMe = function(){
	console.log('Hello Doug');
}
greetMe();
logGreeting(greetMe);

//Use a function expression on the fly

logGreeting(
	function(){
		console.log("Hello Doug ... functions gone wild!");
	}
);