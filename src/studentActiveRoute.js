const db = require('../db/database');

// to see the list of pending requests
function getStudentActiveRoute(req, res, next) {
	db.query(
		'SELECT * FROM session_request WHERE studentId=? AND completed=1',
		[ req.params.studentId ],
		(error, results, fields) => {
			res.json(results);
		}
	);
}

module.exports = { get: getStudentActiveRoute };
