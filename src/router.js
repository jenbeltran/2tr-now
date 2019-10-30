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
let studentLoginRoute = require('./studentLoginRoute');
let studentRegisterRoute = require('./studentRegisterRoute');
let studentRequestRoute = require('./studentRequestRoute');
let studentPendingRoute = require('./studentPendingRoute');
let studentActiveRoute = require('./studentActiveRoute');
let studentCompletedRoute = require('./studentCompletedRoute');

//Tutor routes
let tutorLoginRoute = require('./tutorLoginRoute');
let tutorRegisterRoute = require('./tutorRegisterRoute');
let tutorPendingRoute = require('./tutorPendingRoute');
let tutorActiveRoute = require('./tutorActiveRoute');
let tutorCompletedRoute = require('./tutorCompletedRoute');

// Routes
let requestDetailsRoute = require('./requestDetailsRoute');
let deleteRequestRoute = require('./deleteRequestRoute');

app.prepare().then(() => {
	//student login route
	router.post('/api/student_login', studentLoginRoute.post);

	//student registration which redirects to login page
	router.post('/api/student', studentRegisterRoute.post);

	//student dashboard route
	router.get('/api/student/:studentId', studentRegisterRoute.get);
	router.get('/student_dashboard/:studentId', (req, res) => {
		app.render(req, res, '/student_dashboard', { id: req.params.id, studentId: req.session.studentId });
	});

	//student profile page
	router.get('/student_profile/:id', (req, res) => {
		app.render(req, res, '/student_profile', { id: req.params.id, studentId: req.session.studentId });
	});

	//student profile page from tutor view
	router.get('/student_view/:id', (req, res) => {
		app.render(req, res, '/student_view', { id: req.params.id, studentId: req.session.studentId });
	});

	//student to add request for tutor session
	router.post('/api/student_requests', studentRequestRoute.post);

	// student to see list of pending requests - API and render routes
	router.get('/api/student_pending/:studentId', studentPendingRoute.get);
	router.get('/student_pending/:studentId', (req, res) => {
		app.render(req, res, '/student_pending', { id: req.params.id, studentId: req.session.studentId });
	});

	// student to see list of active requests - API and render routes
	router.get('/api/student_active/:studentId', studentActiveRoute.get);
	router.get('/student_active/:studentId', (req, res) => {
		app.render(req, res, '/student_active', { id: req.params.id, studentId: req.session.studentId });
	});

	//student to see completed sessions
	router.get('/api/student_completed/:studentId', studentCompletedRoute.get);
	router.get('/student_completed/:studentId', (req, res) => {
		app.render(req, res, '/student_completed', { id: req.params.id, studentId: req.session.studentId });
	});

	// TUTOR ROUTES
	//tutor login route
	router.post('/api/tutor_login', tutorLoginRoute.post);

	//tutor registration which redirects to login page
	router.post('/api/tutor', tutorRegisterRoute.post);

	//tutor dashboard route
	router.get('/api/tutor/:tutorId', tutorRegisterRoute.get);
	router.get('/tutor_dashboard/:tutorId', (req, res) => {
		app.render(req, res, '/tutor_dashboard', { id: req.params.id, tutorId: req.session.tutorId });
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
	router.get('/api/tutor_pending/:id', tutorPendingRoute.get);
	router.get('/tutor_pending', (req, res) => {
		app.render(req, res, '/tutor_pending', { id: req.params.id });
	});

	// tutor to see list of active requests - API and render routes
	router.get('/api/tutor_active/:id', tutorActiveRoute.get);
	router.get('/tutor_active', (req, res) => {
		app.render(req, res, '/tutor_active', { id: req.params.id });
	});

	//tutor to see completed sessions
	router.get('/api/tutor_completed/:id', tutorCompletedRoute.get);
	router.get('/tutor_completed/:id', (req, res) => {
		app.render(req, res, '/tutor_completed', { id: req.params.id });
	});

	//to see the details of each ticket request - API and render route
	router.get('/api/request_details/:id', requestDetailsRoute.get);
	router.get('/request_details_student/:id', (req, res) => {
		app.render(req, res, '/request_details_student', { id: req.params.id, studentId: req.session.studentId });
	});
	router.get('/request_details_tutor/:id', (req, res) => {
		app.render(req, res, '/request_details_tutor', { id: req.params.id, tutorId: req.session.tutorId });
	});

	//tutor to change pending request to active
	router.put('/api/request_details/:id', requestDetailsRoute.put);
	router.get('*', (req, res) => {
		return handle(req, res);
	});

	//tutor to change active to completed
	router.put('/api/request_details2/:id', requestDetailsRoute.put2);
});


module.exports = router;
