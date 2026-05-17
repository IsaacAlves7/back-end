const path = require('path');
import 'dotenv/config';

module.exports = {
    /*development: {
        client: 'sqlite3',
        connection: {
            filename: path.resolve(__dirname, 'src', '_shared', 'infra', 'database', 'knex', 'database.sqlite'),
        },
        migrations: {
            directory: path.resolve(__dirname, 'src', '_shared', 'infra', 'database', 'knex', 'migrations'),
        },
        useNullAsDefault: true,
    },*/

    //production: {
    client: 'pg',
    connection: {
        host: process.env.PG_HOST,
        user: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        database: process.env.PG_DATABASE,
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', '_shared', 'infra', 'database', 'knex', 'migrations'),
    },
    useNullAsDefault: true,
    //},
};
