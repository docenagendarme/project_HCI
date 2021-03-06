
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

var add = require('./routes/add');
var journal = require('./routes/journal');
var addEvent = require('./routes/addEvent');
var editEvent = require('./routes/editEvent');
var index = require('./routes/index');
var quickreminder = require('./routes/quickreminder');
var event3 = require('./routes/event3');
var event2 = require('./routes/event3');
var event1 = require('./routes/event3');
var login = require('./routes/login');
var deleteEvent = require('./routes/delete');
var calendar = require('./routes/calendar');


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', login.view);

app.get('/journal', journal.view);
app.get('/login', login.view);
app.get('/add', add.view);
app.get('/index', index.view);
app.get('/addEvent', addEvent.addEvent); // In add.js create addEvent function
app.get('/quickreminder', quickreminder.view);
app.get('/event3', event3.view);
app.get('/event2', event3.view);
app.get('/event1', event3.view);
app.get('/editEvent', editEvent.editEvent);
app.get('/delete', deleteEvent.deleteEvent);
app.get('/calendar', calendar.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
