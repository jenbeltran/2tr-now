require('dotenv').config();
const express = require('express');
const session = require('express-session');
const next = require('next');
const db = require('./db/database');

// using NextJS
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

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

// isLoggedIn - authentication middleware
// server.use(authentication);

//Checks errors as middleware
server.use(defaultErrorHandler);

app.prepare().then(() => {
	server.get('/api/requests', (req, res) => {
		db.query('SELECT * FROM session_request', (error, results, fields) => {
			res.json(results);
		});
	});

	server.get('/api/join_sessions', (req, res) => {
		db.query(
			'select * from tutor_session, session_request where tutor_session.requestId=session_request.requestId',
			(error, results, fields) => {
				res.json(results);
			}
		);
	});

	server.get('*', (req, res) => {
		return handle(req, res);
	});

	server.listen(process.env.HTTP_PORT, (err) => {
		if (err) throw err;
		console.log(`> Now serving on localhost:${process.env.HTTP_PORT}.`);
	});
});
