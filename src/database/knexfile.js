import knex from 'knex';
const knexConfig = {
    development: {
        // database configuration
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'cosmetic'
        }
    },
    migrations: {
        directory: './migrations'
    },
};

const db = knex(knexConfig.development);
/*
function createTable() {
    return db.schema.createTable('users', function(table) {
        table.increments('id');
        table.string('username');
        table.string('email');
        table.string('password');
        table.integer('phone');
        table.string('address');
        table.timestamp('created_at').defaultTo(new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''));
        table.boolean('gender');
    });
}

createTable()
    .then(function() {
        console.log('Table created successfully.');
        db.destroy(); // Close the database connection
    })
    .catch(function(err) {
        console.error('Error creating table:', err);
        db.destroy(); // Close the database connection
    });
// Use `db` for database operations
*/



export default db;