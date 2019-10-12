const db = require('../db/database');

// to see the list of pending requests
function getStudentPendingRoute(req, res, next) {
	db.query('SELECT * FROM session_request WHERE studentId=?', [ req.params.id ], (error, results, fields) => {
		res.json(results);
	});
}

module.exports = { get: getStudentPendingRoute };
