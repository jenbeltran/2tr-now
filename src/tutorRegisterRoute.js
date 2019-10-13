const db = require('../db/database');

// student registration
function postTutorRegisterRoute(req, res, next) {
	db.query(
		'INSERT INTO tutors (tutorEmail, firstName, lastName, password, location, program, specialty, criminalRecord) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
		[
			req.body.tutorEmail,
			req.body.firstName,
			req.body.lastName,
			req.body.password,
			req.body.location,
			req.body.program,
			req.body.specialty,
			req.body.file
		],
		(error, results, fields) => {
			console.log(req.body.file);
			res.json(results);
		}
	);
}

//student dashboard
function getTutorRegisterRoute(req, res, next) {
	db.query('SELECT * FROM tutors WHERE tutorId=?', [ req.params.id ], (error, results, fields) => {
		res.json(results);
	});
}
module.exports = { post: postTutorRegisterRoute, get: getTutorRegisterRoute };
