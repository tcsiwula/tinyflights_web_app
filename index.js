/* Load dependencies */
var express = require('./config/express'),
	open = require('open'),
	app = express();



// Bootstrap and css logic
var path = require('path')
var fs  = require('fs');
var serveIndex = require('serve-index');
app.use(serveIndex(__dirname + '/public'))



// Heroku logic
app.listen(process.env.PORT || 5000, function()
{
    console.log("TinyFlights.com server listening on port %d [http://localhost:5000/]? in %s mode", this.address().port, app.settings.env);
    open('http://127.0.0.1:5000');
});

// app.listen(3000);
// console.log('Server running at http://localhost:3000/');

/* Expose this application */
module.exports = app;
