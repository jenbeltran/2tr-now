const db = require('../db/database');

// student login
function postStudentLoginRoute(req, res, next) {
	let query1 = 'SELECT * FROM students WHERE studentEmail=? AND password=?';
	db.query(query1, [ req.body.studentEmail, req.body.password ], (error, results, fields) => {
		if (results[0].studentEmail != req.body.studentEmail || results[0].password != req.body.password) {
			res.redirect('/login');
		} else {
			req.session.studentId = results[0].studentId;
			res.redirect('/student_dashboard/:id');
			console.log("student login route:")
			console.log(req.session);
		}
	});
}

module.exports = { post: postStudentLoginRoute };
