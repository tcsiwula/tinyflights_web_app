/* Load module dependencies */
var express = require('express'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override');


module.exports = function() {
	var app = express();

	/* Use the 'body-parser' and 'method-override' middleware functions */
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(methodOverride());

	/* Set the application view engine and 'views' folder */
	app.set('views', './app/views');
	app.set('view engine', 'ejs');

	/* Load the routing files */
	require('../app/routes/index.server.routes.js')(app);
	require('../app/routes/users.server.routes.js')(app);
	
	/* Configure static file serving */
	app.use(express.static('./public'));

	return app;
};