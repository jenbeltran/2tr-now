const express = require('express');
const next = require('next');

// using NextJS
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Create instance of an express router
let router = express.Router();

//Student routes
let studentRegisterRoute = require('./studentRegisterRoute');
let studentRequestRoute = require('./studentRequestRoute');
let studentPendingRoute = require('./studentPendingRoute');
let studentCompletedRoute = require('./studentCompletedRoute');

// Routes
let requestDetailsRoute = require('./requestDetailsRoute');

app.prepare().then(() => {
	//student registration which redirects to login page
	router.post('/api/student', studentRegisterRoute.post);

	//student dashboard route
	router.get('/api/student_dashboard/:id', studentRegisterRoute.get);
	router.get('/student_dashboard/:id', (req, res) => {
		app.render(req, res, '/student_dashboard', { id: req.params.id });
	});

	//student to add request for tutor session
	router.post('/api/student_requests', studentRequestRoute.post);

	// student to see list of pending requests - API and render routes
	router.get('/api/student_pending/:id', studentPendingRoute.get);
	router.get('/student_pending/:id', (req, res) => {
		app.render(req, res, '/student_pending', { id: req.params.id });
	});

	//to see the details of each ticket request - API and render route
	router.get('/api/request_details/:id', requestDetailsRoute.get);
	router.get('/request_details/:id', (req, res) => {
		app.render(req, res, '/request_details', { id: req.params.id });
	});

	//student to see completed sessions
	router.get('/api/student_completed/:id', studentCompletedRoute.get);
	router.get('/student_completed/:id', (req, res) => {
		app.render(req, res, '/student_completed', { id: req.params.id });
	});

	router.get('*', (req, res) => {
		return handle(req, res);
	});
});

module.exports = router;
