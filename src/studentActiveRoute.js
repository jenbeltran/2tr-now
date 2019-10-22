const db = require('../db/database');

// to see the list of pending requests
function getStudentActiveRoute(req, res, next) {
	db.query(
		'SELECT * FROM session_request WHERE completed=1 ORDER BY dateRequested',
		(error, results, fields) => {
			res.json(results);
		}
	);
}

module.exports = { get: getStudentActiveRoute };
