const db = require('../db/database');

const bcrypt = require('bcrypt');

// student login
function postStudentLoginRoute(req, res, next) {
	let query1 = 'SELECT * FROM students WHERE studentEmail=?';
	db.query(query1, [ req.body.studentEmail ], (error, results, fields) => {
		if (results[0].studentEmail != req.body.studentEmail) {
			res.redirect('/login');
		} else {
			let query2 = 'SELECT * FROM students WHERE studentEmail=?';
			db.query(query2, [ req.body.studentEmail ], (err, results) => {
				if (err) next(err);
				else {
					//compare hashed password from database to hashed req.body.password in form
					return bcrypt.compare(req.body.password, results[0].password).then((passwordValid) => {
						// If invalid respond with authentication failure
						if (!passwordValid) {
							res.redirect('/login');
							// Else log the user in and redirect to home page
						} else {
							req.session.studentId = results[0].studentId;
							res.redirect('/student_dashboard/:studentId');
							console.log('student login route:');
							console.log(req.session);
						}
					});
				}
			});
		}
	});
}

module.exports = { post: postStudentLoginRoute };
