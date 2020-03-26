exports.up = knex => {
  return knex.schema.createTable('ongs', table => {
    table.increments();

    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('state').notNullable();
    table.string('city').notNullable();
  });
};

exports.down = knex => {
  return knex.schema.dropTable('ongs');
};
