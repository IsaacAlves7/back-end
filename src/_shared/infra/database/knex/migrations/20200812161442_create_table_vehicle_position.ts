import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('vehicle_position', (table) => {
        table.increments('id').primary();
        table.decimal('latitude', 9, 6).notNullable();
        table.decimal('longitude', 9, 6).notNullable();
        table
            .integer('vehicle_id')
            .references('id')
            .inTable('vehicles')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
            .notNullable();
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('vehicle_position');
}
