const pgp = require('pg-promise')();
const db = pgp({
    user: 'ouqljgkj',
    password: 'iTWAeSkDC5inkU_Onzn4TVvtvjelzuIw',
    host: 'raja.db.elephantsql.com',
    port: 5432,
    database: 'ouqljgkj',
    ssl: {rejectUnauthorized: false}
})

module.exports = db;