exports.seed = async function (knex) {
  await knex("users").insert([
    {
      username: "tiff",
      password: "$2a$12$3nS4JfLm0GZhfYDGVyaCIOkDQbtwRSmG24rF/Yo48OUbMPmUTzUPu",
      firstName: "Tiffany",
      lastName: "Arellano",
      city: "Suitland",
      state: "Maryland",
    },
    {
      username: "who",
      password: "$2a$12$WcDGZqG89545jbdi6KNSj.k8xwDCy9w98gmVw5sEErsWnmxCuACOe",
      firstName: "Mike",
      lastName: "Jones",
      city: "Seattle",
      state: "Washington",
    },
    {
      username: "arrow",
      password: "$2a$12$JoZ52zWJQ9EuhV91WA8gO.4noXyReOFqBxM7JTqIUrKXxNXE23ikq",
      firstName: "Green",
      lastName: "Arrow",
      city: "Suitland",
      state: "Maryland",
    },
  ]);
};
