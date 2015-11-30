var Emitter = require('./emitter');

var emtr = new Emitter;

emtr.on('greet', function(){
	console.log("Greet Triggered: Do fn1");
});

emtr.on('greet', function(){
	console.log("Greet Triggered:  Do fn2");
});

console.log("hello");
emtr.emit('greet');