// Update with your config settings.

module.exports = {

    development: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'db_price_finder'
        }
    },
    production: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'id17259105_root',
            password: 'Sanchit@2021',
            database: 'id17259105_price_finder_db'
        }
    }

};