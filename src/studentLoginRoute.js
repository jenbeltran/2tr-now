const db = require('../db/database');

// student registration
function postStudentLoginRoute(req, res, next) {
	console.log(req.body);
	let query1 = 'SELECT studentEmail, password FROM students WHERE studentEmail=? AND password=?';
	db.query(query1, [ req.body.studentEmail, req.body.password ], (error, results, fields) => {
		console.log(results);
	});

	// if (dbUsername < 1 || dbUsername == undefined) {
	//     res.redirect('/login');
	// } else {
	//     // pull password from database
	//     let query2
	//     'SELECT password FROM students WHERE studentEmail=?';
	//     db.query(query2, [req.body.username], (err, results) => {
	//         if (req.body.password != results) {
	//             res.redirect('/login');
	//             // Else log the user in and redirect to home page
	//         } else {
	//             req.session.username = req.body.username;
	//             res.redirect('/student_dashboard/:id');
	//         }
	//         console.log(req.session);
}

module.exports = { post: postStudentLoginRoute };
