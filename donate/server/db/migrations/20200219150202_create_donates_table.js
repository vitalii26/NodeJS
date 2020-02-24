exports.up = function(knex) {
    return knex.schema
        .createTable('fundraising', function (table) {
            table.increments('id');
            table.string('email', 255).notNullable();
            table.string('name', 255).notNullable();
            table.integer('donation', 255).notNullable();
            table.string('message', 255).nullable();
            table.timestamp('donated_at').default(knex.fn.now());
        });
};
exports.down = function(knex) {
    return knex.schema
        .dropTable('fundraising');
};
