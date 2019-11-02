const db = require('../db/database');

// to see the list of pending requests
function getTutorActiveRoute(req, res, next) {
	db.query(
		'SELECT * FROM session_request WHERE tutorId=? AND completed=1 ORDER BY dateRequested',
		[ req.params.tutorId ],
		(error, results, fields) => {
			res.json(results);
		}
	);
}

module.exports = { get: getTutorActiveRoute };
