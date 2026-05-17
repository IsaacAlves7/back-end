import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('stops', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.decimal('latitude', 9, 6).notNullable();
        table.decimal('longitude', 9, 6).notNullable();
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('stops');
}
