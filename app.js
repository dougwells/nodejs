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

//API controller we built
var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

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


htmlController(app);
apiController(app);

//Environment Variable.  Can be set by server configuration.
// || 3000 is "trick" to set default value if none.
var port = process.env.PORT || 3000;
app.listen(port);