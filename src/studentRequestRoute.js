const db = require('../db/database');

// student request session route
function postStudentRequestRoute(req, res, next) {
	db.query(
		'INSERT INTO session_request (studentId, program, subject, language, sessionLength, topic, description) VALUES (?, ?, ?, ?, ?, ?, ?)',
		[
			req.session.studentId,
			req.body.program,
			req.body.subject,
			req.body.language,
			req.body.sessionLength,
			req.body.topic,
			req.body.description
		],
		(error, results, fields) => {
			console.log(req.session.studentId);
			res.json(results);
		}
	);
}

module.exports = { post: postStudentRequestRoute };
