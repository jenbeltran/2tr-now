const db = require('../db/database');

// student login
function postStudentLoginRoute(req, res, next) {
	let query1 = 'SELECT * FROM students WHERE studentEmail=?';
	db.query(query1, [ req.body.studentEmail, req.body.password ], (error, results, fields) => {
		if (results[0].studentEmail != req.body.studentEmail) {
			res.redirect('/login');
		} else {
			req.session.studentId = results[0].studentId;
		
			console.log("student login route:")
			console.log(req.session);
		}
	});
}

module.exports = { post: postStudentLoginRoute };
