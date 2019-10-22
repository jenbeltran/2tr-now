const db = require('../db/database');

// to see the list of pending requests
function getStudentPendingRoute(req, res, next) {
	console.log(req.session.studentId);
	db.query(
		'SELECT * FROM session_request WHERE studentId=? AND completed=0',
		[ req.params.id ],
		(error, results, fields) => {
			res.json(results);
		}
	);
}

module.exports = { get: getStudentPendingRoute };
