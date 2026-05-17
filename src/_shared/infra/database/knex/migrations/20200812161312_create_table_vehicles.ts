import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('vehicles', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('model').notNullable();
        table
            .integer('line_id')
            .references('id')
            .inTable('lines')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
            .notNullable();
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('vehicles');
}
