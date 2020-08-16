exports.seed = async function (knex) {
  await knex("issues").insert([
    {
      title: "Pothole",
      desc: "FILL IT",
      completed: false,
      area_id: 1,
      user_id: 2,
      votes: 3,
    },
    {
      title: "Street Lamp",
      desc: "The bulb is out",
      completed: false,
      area_id: 1,
      user_id: 2,
      votes: 2,
    },
    {
      title: "Broken Fence",
      desc: "on 24th and Main",
      completed: false,
      area_id: 1,
      user_id: 1,
      votes: 1,
    },
  ]);
};
