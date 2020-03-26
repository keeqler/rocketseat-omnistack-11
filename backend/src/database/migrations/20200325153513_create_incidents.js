exports.up = knex => {
  return knex.schema.createTable('incidents', table => {
    table.increments();

    table.string('title').notNullable();
    table.string('description').notNullable();
    table.string('value').notNullable();

    table.integer('ongId').notNullable();

    // prettier-ignore
    table.foreign('ongId').references('id').inTable('ongs');
  });
};

exports.down = knex => {
  return knex.schema.dropTable('incidents');
};
