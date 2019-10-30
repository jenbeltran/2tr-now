const db = require('../db/database');

const bcrypt = require('bcrypt');

// tutor login
function postTutorLoginRoute(req, res, next) {
	console.log(req.body);
	let query1 = 'SELECT * FROM tutors WHERE tutorEmail=?';
	db.query(query1, [ req.body.tutorEmail ], (error, results, fields) => {
		if (results[0].tutorEmail != req.body.tutorEmail) {
			res.redirect('/login');
		} else {
			let query2 = 'SELECT * FROM tutors WHERE tutorEmail=?';
			db.query(query2, [ req.body.tutorEmail ], (err, results) => {
				if (err) next(err);
				else {
					//compare hashed password from database to hashed req.body.password in form
					return bcrypt.compare(req.body.password, results[0].password).then((passwordValid) => {
						// If invalid respond with authentication failure
						if (!passwordValid) {
							res.redirect('/login');
							// Else log the user in and redirect to home page
						} else {
							req.session.tutorId = results[0].tutorId;
							res.redirect('/tutor_dashboard/:tutorId');
							console.log('tutor login route:');
							console.log(req.session);
						}
					});
				}
			});
		}
	});
}

module.exports = { post: postTutorLoginRoute };
