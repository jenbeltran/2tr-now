require('dotenv').config();
const express = require('express');
const next = require('next');
const db = require('./db/database');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();
// Parse all incoming <form> data into an object we can access in our routes with `req.body`
server.use(express.json());

app.prepare().then(() => {
	server.get('/api/requests', (req, res) => {
		db.query('SELECT * FROM session_request', (error, results, fields) => {
			res.json(results);
		});
	});

	server.get('*', (req, res) => {
		return handle(req, res);
	});

	server.listen(process.env.HTTP_PORT, (err) => {
		if (err) throw err;
		console.log(`> Now serving on localhost:${process.env.HTTP_PORT}.`);
	});
});
