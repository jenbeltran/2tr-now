require('dotenv').config();
const express = require('express');
const session = require('express-session');

const router = require('./src/router');

//Express Session Middleware
const defaultSessionValues = require('./middleware/default-session-values');
const authentication = require('./middleware/authentication');
const defaultErrorHandler = require('./middleware/errorHandler');

// Create an instance of an express application
const server = express();

// Parse all data to a json object
server.use(express.json());

//Express Session middleware
server.use(
	session({
		secret            : process.env.SESSION_SECRET, // Used to cryptographically "sign" the session ID
		resave            : false, // Forces the session to be saved back to the session store, just a sane default
		saveUninitialized : true, // All HTTP requests without a session have a session started for them
		cookie            : {
			httpOnly : true, // Makes cookie inaccessible to client side JS
			maxAge   : 12000000 // Cookie will expire after two hours
		}
	})
);

// Middleware to prepare default values for sessions
// This must come after the session middleware to ensure its values are set properly
server.use(defaultSessionValues);

server.use(router);

// isLoggedIn - authentication middleware
// server.use(authentication);

//Checks errors as middleware
server.use(defaultErrorHandler);

server.listen(process.env.HTTP_PORT, (err) => {
	if (err) throw err;
	console.log(`> Now serving on localhost:${process.env.HTTP_PORT}.`);
});
