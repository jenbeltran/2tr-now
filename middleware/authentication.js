/**
 *
 */
//check if a user is logged in
module.exports = function isLoggedIn(req, res, next) {
	if (!req.session.username) {
		console.log('authentication middleware');
		res.redirect('/login');
	} else {
		next();
	}
};
