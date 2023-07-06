function checkAuth(req, res, next) {
	// Check req.session.loggedIn to see if the user is logged in

	if (req.session.loggedIn) {
		// If the user is logged in, call next()
		next()
	} else if (!req.session.loggedIn) {
		// If the user isn't logged in, redirect them to the login route
		return res.redirect('/login')
	}
}

module.exports = checkAuth
