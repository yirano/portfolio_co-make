module.exports = {
	client: 'sqlite3',
	useNullAsDefault: true,
	connection: {
		filename: './dev.sqlite3'
	},
	migration: {
		directory: './data/migrations'
	},
	seeds: {
		directory: './data/seeds'
	},
	pool: {
		afterCreate: (conn, done) => {
			conn.run('PRAGMA foreign_keys = ON', done)
		}
	}
}
