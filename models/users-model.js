const db = require('../database/config')

function registerUser(user) {
	return db('users').insert(user)
}

function searchUser(username) {
	return db('users').where('users.username', username)
}

module.exports = {
	registerUser,
	searchUser
}
