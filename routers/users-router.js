const router = require('express').Router()
const Users = require('../models/users-model')
const bcrypt = require('bcryptjs')

router.post('/register', async (req, res, next) => {
	const { username, password, firstName, lastName, city, state } = req.body
	try {
		const user = Users.searchUser(username)
		if (user) {
			res.status(409).json({ message: 'Username already taken' })
		}
		const newUser = await Users.add({
			username,
			password: await bcrypt.hash(password, 12),
			firstName,
			lastName,
			city,
			state
		})
		res.status(201).json(newUser)
	} catch (error) {
		next(error)
	}
})

module.exports = router
