const db = require('../db/database');

// students to see a list of completed sessions
function getStudentCompletedRoute(req, res, next) {
	db.query(
		'SELECT * FROM session_request WHERE studentId=? AND completed=2 ',
		[ req.params.id ],
		(error, results, fields) => {
			res.json(results);
		}
	);
}

module.exports = { get: getStudentCompletedRoute };
