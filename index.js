/* Load dependencies */
var express = require('./config/express');
var open = require('open');
var app = express();

/* Expose this application */
module.exports = app;

// Heroku logic
app.listen(process.env.PORT || 5000, function()
{
    console.log("TinyFlights.com server listening on port %d [http://localhost:5000/]? in %s mode", this.address().port, app.settings.env);
    open('http://127.0.0.1:5000');
});
