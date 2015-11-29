var Greetr = function(){
	this.greeting = "Hello From Greet4!",
	this.greet = function(){
		console.log(this.greeting);
	}
}

module.exports = Greetr;