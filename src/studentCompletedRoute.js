const db = require('../db/database');

// students to see a list of completed sessions
function getStudentCompletedRoute(req, res, next) {
	db.query(
		'select * from tutor_session, session_request where tutor_session.requestId=session_request.requestId and studentId=?',
		[ req.params.id ],
		(error, results, fields) => {
			res.json(results);
		}
	);
}

module.exports = { get: getStudentCompletedRoute };
