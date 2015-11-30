function Emitter (){
	this.events = {};
}

//This is how you add "listeners & emmitters" 
Emitter.prototype.on = function(type, listener){
	this.events[type] = this.events[type] || [];
	this.events[type].push(listener);
}

//do something when listened for event happens
Emitter.prototype.emit = function(type){
	if (this.events[type]){
		this.events[type].forEach(function(listener) {
			listener();
		});
	}	
}

module.exports = Emitter;


//this.events[type] ~ dot notation => this.events.receivedInternetRequest
//type of receivedInternetRequest
//listener = fn1 (ie, do something1 => ie, send response to client
//this.events.receivedInternetRequest = [function(1){}, function(2){}, etc]