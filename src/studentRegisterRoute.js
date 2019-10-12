const db = require('../db/database');

// student registration
function postStudentRegisterRoute(req, res, next) {
	db.query(
		'INSERT INTO students (studentEmail, firstName, lastName, password, location, dob, program) VALUES (?, ?, ?, ?, ?, ?, ?)',
		[
			req.body.studentEmail,
			req.body.firstName,
			req.body.lastName,
			req.body.password,
			req.body.location,
			req.body.dob,
			req.body.program
		],
		(error, results, fields) => {
			res.json(results);
		}
	);
}

//student dashboard
function getStudentRegisterRoute(req, res, next) {
	db.query('SELECT * FROM students WHERE studentId=?', [ req.params.id ], (error, results, fields) => {
		res.json(results);
	});
}
module.exports = { post: postStudentRegisterRoute, get: getStudentRegisterRoute };
