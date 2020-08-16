exports.up = async function (knex) {
  await knex.schema.createTable("issues", (table) => {
    table.increments("id");
    table.text("title").notNull();
    table.text("desc").notNull();
    table.bool("completed").default(false);
    table.integer("area_id").references("id").inTable("area");
    table.integer("user_id").references("id").inTable("users");
    table.integer("votes").default(0);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("issues");
};
