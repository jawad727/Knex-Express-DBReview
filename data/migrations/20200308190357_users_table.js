
exports.up = function(knex) {
  // The change we want to make to our schema

  return knex.schema.createTable("users", tbl => {
      tbl.increments("user_id");

      tbl.text("username", 128)
        .unique()
        .notNullable()

      tbl.text("password")
  })
};

exports.down = function(knex) {
  // Undoing that change
    return knex.schema.dropTableIfExists("users")
};
