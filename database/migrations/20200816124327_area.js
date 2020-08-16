exports.up = async function(knex) {
	await knex.schema.createTable('area', (table) => {
		table.increments('id')
		table.text('city').unique()
		table.text('state').unique()
	})
}

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists('area')
}
