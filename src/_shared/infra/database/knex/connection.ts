import knex from 'knex';
import path from 'path';
import 'dotenv/config';

//DATABASE USING IN DEVELOPMENT
/*const databaseDevelopment = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true,
});*/

//DATABASE USING IN PRODUCTION
const database = knex({
    client: 'pg',
    connection: {
        host: process.env.PG_HOST,
        user: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        database: process.env.PG_DATABASE,
    },
    useNullAsDefault: true,
});

export default database;
