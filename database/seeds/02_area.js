exports.seed = async function(knex) {
	await knex('area').insert([ { city: 'Suitland', state: 'Maryland' } ])
}
