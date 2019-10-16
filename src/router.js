const express = require('express');
const next = require('next');

// using NextJS
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Create instance of an express router
let router = express.Router();

//TODO: storage for criminal record uploads - need help
var multer = require('multer');
var upload = multer();

//Student routes
let studentRegisterRoute = require('./studentRegisterRoute');
let studentRequestRoute = require('./studentRequestRoute');
let studentPendingRoute = require('./studentPendingRoute');
let studentCompletedRoute = require('./studentCompletedRoute');

//Tutor routes
let tutorRegisterRoute = require('./tutorRegisterRoute');
let tutorPendingRoute = require('./tutorPendingRoute');
let tutorCompletedRoute = require('./tutorCompletedRoute');

// Routes
let requestDetailsRoute = require('./requestDetailsRoute');

app.prepare().then(() => {
	//student registration which redirects to login page
	router.post('/api/student', studentRegisterRoute.post);

	//student dashboard route
	router.get('/api/student/:id', studentRegisterRoute.get);
	router.get('/student_dashboard/:id', (req, res) => {
		app.render(req, res, '/student_dashboard', { studentId: req.params.id });
	});

	//student profile page
	router.get('/student_profile/:id', (req, res) => {
		app.render(req, res, '/student_profile', { id: req.params.id });
	});

	//student profile page from tutor view
	router.get('/student_view/:id', (req, res) => {
		app.render(req, res, '/student_view', { id: req.params.id });
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

	//tutor registration which redirects to login page
	router.post('/api/tutor', tutorRegisterRoute.post);

	//tutor dashboard route
	router.get('/api/tutor/:id', tutorRegisterRoute.get);
	router.get('/tutor_dashboard/:id', (req, res) => {
		app.render(req, res, '/tutor_dashboard', { id: req.params.id });
	});

	//tutor profile page
	router.get('/tutor_profile/:id', (req, res) => {
		app.render(req, res, '/tutor_profile', { id: req.params.id });
	});

	//tutor profile page from student view
	router.get('/tutor_view/:id', (req, res) => {
		app.render(req, res, '/tutor_view', { id: req.params.id });
	});

	// tutor to see list of pending requests - API and render routes
	router.get('/api/tutor_pending', tutorPendingRoute.get);
	router.get('/tutor_pending', (req, res) => {
		app.render(req, res, '/tutor_pending', { id: req.params.id });
	});

	//tutor to see completed sessions
	router.get('/api/tutor_completed/:id', tutorCompletedRoute.get);
	router.get('/tutor_completed/:id', (req, res) => {
		app.render(req, res, '/tutor_completed', { id: req.params.id });
	});

	router.get('*', (req, res) => {
		return handle(req, res);
	});
});

module.exports = router;