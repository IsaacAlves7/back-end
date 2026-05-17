import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('lines', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table
            .integer('stop_id')
            .references('id')
            .inTable('stops')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
            .notNullable();
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('lines');
}
