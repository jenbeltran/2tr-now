const db = require('../db/database');

// student request session route
function postStudentRequestRoute(req, res, next) {
	db.query(
		'INSERT INTO session_request (studentId, program, subject, language, sessionLength, topic, description, completed, dateRequested) VALUES (?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP())',
		[
			req.session.studentId,
			req.body.program,
			req.body.subject,
			req.body.language,
			req.body.sessionLength,
			req.body.topic,
			req.body.description,
			0
		],
		(error, results, fields) => {
			console.log('Post student request route');
			console.log(req.session.studentId);
			res.json(results);
		}
	);
}

module.exports = { post: postStudentRequestRoute };
