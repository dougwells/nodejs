var greet1 = require('./greet1.js');
greet1();

var greet2 = require('./greet2.js').greet;
greet2();

var greet3 = require('./greet3.js');
greet3.greet();
greet3.greeting = "Howdy from Greet3!";

var greet3b = require('./greet3.js');
greet3b.greet();

var Greet4 = require('./greet4.js');
var greet4 = new Greet4();
greet4.greet();

var greet5 = require('./greet5.js');
greet5.greet();