exports.seed = async function(knex) {
	await knex('issues').insert([
		{
			title: 'Pothole',
			desc: 'FILL IT',
			completed: false,
			area_id: 1,
			votes: 3
		}
	])
}
