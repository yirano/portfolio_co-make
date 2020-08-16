exports.up = async function(knex) {
	await knex.schema.createTable('users', (table) => {
		table.increments('id')
		table.text('username').notNull().unique()
		table.text('password').notNull()
		table.text('firstName').notNull()
		table.text('lastName').notNull()
		table.text('city').notNull()
		table.text('state').notNull()
	})
}

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists('users')
}
