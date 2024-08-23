const { Pool } = require('pg');

class Database {
    constructor() {
        this.database = new Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'api_pets',
            password: 'postgre',
            port: 5432
        });
    }
}

module.exports = Database;

// por enquanto não tá sendo usado pra nada




