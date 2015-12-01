//merely changed require to the node file 'events.js'.  Clever!
var Emitter = require('events');
var eventConfig = require('./config.js').events

var emtr = new Emitter;

emtr.on(eventConfig.GREET, function(){
	console.log("Greet Triggered: Do fn1");
});

emtr.on(eventConfig.GREET, function(){
	console.log("Greet Triggered:  Do fn2");
});

emtr.on(eventConfig.FILESAVED, function(){
	console.log("A file has just been saved");
});

emtr.on(eventConfig.FILESAVED, function(){
	console.log("Yo Doug ... someone just saved a file");
})

var hardWork = function(){
	console.log("Man ... saving files is hard work")
}
emtr.on(eventConfig.FILESAVED, hardWork);


//changed code from emtr.events.greet --> emtr._events.greet
console.log("hello");
emtr.emit('greet');
console.log(emtr._events.greet);

console.log("Warning ... file save is about to happen");
emtr.emit('fileSaved');
console.log(emtr._events);