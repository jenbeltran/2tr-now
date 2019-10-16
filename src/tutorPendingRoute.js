const db = require('../db/database');

// to see the list of pending requests
function getTutorPendingRoute(req, res, next) {
	db.query('SELECT * FROM session_request AND completed=0 ORDER BY dateRequested DESC', (error, results, fields) => {
		res.json(results);
	});
}

module.exports = { get: getTutorPendingRoute };
