const db = require('../db/database');

const bcrypt = require('bcrypt');
const saltRounds = 10;

// student registration
function postStudentRegisterRoute(req, res, next) {
	const password = req.body.password;
	bcrypt.hash(password, saltRounds, function(err, hash) {
		db.query(
			'INSERT INTO students (studentEmail, firstName, lastName, password, location, dob, program) VALUES (?, ?, ?, ?, ?, ?, ?)',
			[
				req.body.studentEmail,
				req.body.firstName,
				req.body.lastName,
				hash,
				req.body.location,
				req.body.dob,
				req.body.program
			],
			(error, results, fields) => {
				res.json(results);
			}
		);
	});
}

//student dashboard
function getStudentRegisterRoute(req, res, next) {
	console.log("getting student from db- studentregister.js");
	console.log(req.params);
	db.query('SELECT * FROM students WHERE studentId=?', [ req.params.studentId ], (error, results, fields) => {
		res.json(results);
	});
}
module.exports = { post: postStudentRegisterRoute, get: getStudentRegisterRoute };
