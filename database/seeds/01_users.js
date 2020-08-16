exports.seed = async function(knex) {
	await knex('users').insert([
		{
			username: 'tiff',
			password: 'password',
			firstName: 'Tiffany',
			lastName: 'Arellano',
			city: 'Suitland',
			state: 'Maryland'
		}
	])
}
