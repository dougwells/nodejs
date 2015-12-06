/** Look in node_modules/express/lib/express.js
exports = module.exports = createApplication;
return = app; app has some useful server function...

from node_modules/express/lib/application.js
app.listen = function listen() {
  var server = http.createServer(this);
  return server.listen.apply(server, arguments);};
*/
var express = require('express');

// Body-parser is Express middleware.  Parses POST Parameters
var bodyParser = require('body-parser');
var app = express();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// create application/json parser
var jsonParser = bodyParser.json();

//Environment Variable.  Can be set by server configuration.
// || 3000 is "trick" to set default value if none.
var port = process.env.PORT || 3000;
app.listen(port);

/**.use is "middleware" happens between req & res
('route', function).  Can run any function when route
is requested.  next() -> run next middle ware fn.
if no route specified, fn runs on ALL request to port
*/

app.use('/assets', express.static(__dirname + '/public'));

//Sets ejs as view engine.  Put view.ejs files in folder "views"
app.set('view engine', 'ejs');

/** Routing.  Thru app/express can have all 4 HTTP verbs
(GET, POST, PUT, DELETE) on ONE URL.  Note no "content-type"
Express takes care of that for me
Can use ".render" b/c of ejs view engine
*/

app.get('/', function(req, res){
  res.render('index');
});

// ":" -> can be anything. Var on req.params object.  Mult. vars ok
//Query String Variables -> the ?varName="Doug" or the ?qvar=123 in URL Bar
app.get('/person/:id/:name', function(req, res){
  res.render('person', {ID: req.params.id, Name:req.params.name, Qstr: req.query.qstr, Qvar:req.query.qvar});
});


//Body-Parser.  Use w/webforms.  Parses POST BODY. Middleware w/urlencodedParser
app.post('/survey', urlencodedParser, function(req, res){
  res.send('Welcome, ' + req.body.firstname+ "!")
  console.log(req.body.lastname +" Logged In.")
});

// POST /api/users gets JSON bodies
app.post('/personjson', jsonParser, function (req, res) {
  console.log("Amigo "+ req.body.lastname+" sent JSON");
  // create user in req.body
});

app.get('/api', function(req, res){
  res.json({firstname: "Doug", lastname: "Wells"});
});

