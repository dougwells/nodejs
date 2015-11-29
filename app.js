//pass by value
function change (b){
	b=2;
	console.log(b);
}

var a =1;
change(a);
console.log(a);


//pass by reference

function changeObj(d){
	d.prop1 = "green",
	d.prop2 = {}
}
var c = {};
console.log(c);
changeObj(c);
console.log(c);