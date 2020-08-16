module.exports = {
	development: {
		client: 'sqlite3',
		useNullAsDefault: true,
		connection: {
			filename: './dev.sqlite3'
		},
		migrations: {
			directory: './database/migrations'
		},
		seeds: {
			directory: './database/seeds'
		},
		pool: {
			afterCreate: (conn, done) => {
				conn.run('PRAGMA foreign_keys = ON', done)
			}
		}
	}
}
