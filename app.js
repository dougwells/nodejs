var obj = {
	name: "John Doe",
	greet: function(param){console.log(`${param} ${this.name}`);}
}  

var obj2 = {
	name: "Doug Wells"
}

obj.greet("Hello");
obj.greet.call(obj2, "Hi");
obj.greet.apply(obj,["Howdy"])
