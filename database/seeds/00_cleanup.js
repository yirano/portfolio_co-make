exports.seed = async function(knex) {
	await knex('issues').truncate()
	await knex('area').truncate()
	await knex('users').truncate()
}
