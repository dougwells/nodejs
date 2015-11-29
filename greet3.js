var Greetr = function(){
	this.greeting = "Hello From Greet3!",
	this.greet = function(){
		console.log(this.greeting);
	}
}

module.exports = new Greetr();