const db = require('../db/database');

// tutor login
function postTutorLoginRoute(req, res, next) {
	console.log(req.body);
	let query1 = 'SELECT * FROM tutors WHERE tutorEmail=?';
	db.query(query1, [ req.body.tutorEmail ], (error, results, fields) => {
		if (results[0].tutorEmail != req.body.tutorEmail) {
			res.redirect('/login');
		} else {
			req.session.tutorId = results[0].tutorId;
			res.redirect('/tutor_dashboard/:tutorId');
			console.log(req.session);
		}
	});
}

module.exports = { post: postTutorLoginRoute };
