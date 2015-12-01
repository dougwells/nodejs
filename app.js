var Emitter = require('./emitter');

var emtr = new Emitter;

emtr.on('greet', function(){
	console.log("Greet Triggered: Do fn1");
});

emtr.on('greet', function(){
	console.log("Greet Triggered:  Do fn2");
});

emtr.on('fileSaved', function(){
	console.log("A file has just been saved");
});

emtr.on('fileSaved', function(){
	console.log("Yo Doug ... someone just saved a file");
})

var hardWork = function(){
	console.log("Man ... saving files is hard work")
}
emtr.on('fileSaved', hardWork);

console.log("hello");
emtr.emit('greet');
console.log(emtr.events.greet);

console.log("Warning ... file save is about to happen");
emtr.emit('fileSaved');
console.log(emtr.events);