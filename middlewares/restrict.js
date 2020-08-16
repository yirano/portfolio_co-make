const jwt = require('jsonwebtoken')
const { json } = require('express')

function restrict() {
	return (
		async,
		(req, res, next) => {
			const authError = { message: 'Not authorized' }
			try {
				const token = req.headers.authorization || req.cookies.token

				jwt.verify(token, process.env.SECRET, (err, decoded) => {
					if (err) {
						return res.status(401).json({ message: 'STAAAAAY OUT' })
					}

					next()
				})
			} catch (error) {
				next(error)
			}
		}
	)
}

module.exports = restrict
