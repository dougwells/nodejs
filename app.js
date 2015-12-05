/** Look in node_modules/express/lib/express.js
exports = module.exports = createApplication;
return = app; app has some useful server function...

from node_modules/express/lib/application.js
app.listen = function listen() {
  var server = http.createServer(this);
  return server.listen.apply(server, arguments);};
*/
var express = require('express');
var app = express();

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

app.use('/', function(req, res, next){
  console.log("Request URL : " + req.url);
  next();
});

/** Routing.  Thru app/express can have all 4 HTTP verbs
(GET, POST, PUT, DELETE) on ONE URL.  Note no "content-type"
Express takes care of that for me
*/

app.get('/', function(req, res){
  res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello CSS World</h1></body></html>');
});

// ":" -> can be anything.  Variable is in the request (req) and
// can access via params object.  Can have multiple vars (page & id)
app.get('/person/:page/:id', function(req, res){
  res.send('<html><head></head><body><h1>Hello from Person ' + req.params.id + 'Page #' + req.params.page + '</h1></body></html>');
});

app.get('/api', function(req, res){
  res.json({firstname: "Doug", lastname: "Wells"});
});

