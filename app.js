var EventEmitter = require('events');
var util = require('util');

function Greetr (){
	EventEmitter.call(this);
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greeting = "Hello World";

Greetr.prototype.greet = function(param){
	console.log(this.greeting + " from:"+ param);
	this.emit('greet', param);
}

var greeter1 = new Greetr;
greeter1.on('greet', function(param){
	console.log("Someone Named "+param + " Greeted")
});

var greeter2 = new Greetr;
greeter2.on('greet', function(param){
	console.log("Someone Named "+param + " Greeted")
});

greeter1.greet("Doug");
greeter2.greet("Linda")
console.log(Greetr.prototype.greeting);