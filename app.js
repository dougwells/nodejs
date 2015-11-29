function Person (fname, lname){
	this.firstname = fname,
	this.lastname = lname
}

var john = new Person("John", "Doe"); 
console.log(john.firstname);


console.log(john.__proto__);