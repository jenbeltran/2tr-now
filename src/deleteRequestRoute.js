const db = require('../db/database');

// delete request
function deleteRequestRoute(req, res, next) {
		let query = 'DELETE FROM session_request WHERE requestId =?';
		db.query(query, [ req.params.id ], (error, results, fields) => {
			res.redirect('/student_pending');
		});
	}

module.exports = { post: deleteRequestRoute };
