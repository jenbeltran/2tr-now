const db = require('../db/database');

// students to see a list of completed sessions
function getTutorCompletedRoute(req, res, next) {
	db.query(
		'SELECT * FROM session_request WHERE tutorId=? AND completed=1 ',
		[ req.params.id ],
		(error, results, fields) => {
			res.json(results);
		}
	);
}

module.exports = { get: getTutorCompletedRoute };
