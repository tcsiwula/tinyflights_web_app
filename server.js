/* Load dependencies */
var express = require('./config/express');

var app = express();

/* Use the Express application instance to listen on localhost */
app.listen(3000);

console.log('Server running at http://localhost:3000/');

/* Expose this application */
module.exports = app;