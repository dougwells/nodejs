// Need body-parser middleware to parse BODY of POST Request
// Places properties on req.body.xx

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });


//Need bodyParser BEFORE module

module.exports = function(app){
app.get('/', function(req, res){
  res.render('index');
});

/** 
 * ":" -> can be anything. Var on req.params object.  Mult. vars ok
 * Query String Variables -> the ?varName="Doug" or the ?qvar=123 in URL Bar
 * Express can parse QSVs.  Places property on req.params.xx
*/ 

app.get('/person/:id/:name', function(req, res){
  res.render('person', {ID: req.params.id, Name:req.params.name, Qstr: req.query.qstr, Qvar:req.query.qvar});
});


//Body-Parser.  Use w/webforms.  Parses POST BODY. on req.body.xx
app.post('/survey', urlencodedParser, function(req, res){
  res.send('Welcome, ' + req.body.firstname+ "!")
  console.log(req.body.lastname +" Logged In.")
});
}