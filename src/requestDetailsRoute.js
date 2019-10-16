const db = require('../db/database');

// to see the details of each ticket request
function getRequestDetailsRoute(req, res, next) {
	db.query('SELECT * FROM session_request WHERE requestId=?', [ req.params.id ], (error, results, fields) => {
		res.json(results);
	});
}

// to change request from pending to completed
function acceptRequestRoute(req, res, next) {
	db.query(
		'UPDATE session_request SET completed=1, tutorId=2000 WHERE requestId=?',
		[ req.params.id ],
		(error, results, fields) => {
			res.json(results);
		}
	);
}

module.exports = { get: getRequestDetailsRoute, put: acceptRequestRoute };
