const db = require('../db/database');

const bcrypt = require('bcrypt');
const saltRounds = 10;

// student registration
function postTutorRegisterRoute(req, res, next) {
	const password = req.body.password;
	bcrypt.hash(password, saltRounds, function(err, hash) {
		db.query(
			'INSERT INTO tutors (tutorEmail, firstName, lastName, password, location, program, specialty, criminalRecord) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
			[
				req.body.tutorEmail,
				req.body.firstName,
				req.body.lastName,
				hash,
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
	});
}

//student dashboard
function getTutorRegisterRoute(req, res, next) {
	db.query('SELECT * FROM tutors WHERE tutorId=?', [ req.params.tutorId ], (error, results, fields) => {
		res.json(results);
	});
}
module.exports = { post: postTutorRegisterRoute, get: getTutorRegisterRoute };
