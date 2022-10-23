const pgp = require('pg-promise')();
const db = pgp({
    user: 'tmpeihvyfaiadg',
    password: '8e6efd346515fcf50ea4cac195f9e5c82500c744b30fa82355e87b5ad146d228',
    host: 'ec2-44-205-63-142.compute-1.amazonaws.com',
    port: 5432,
    database: 'de9ucc3r4g3a4',
    ssl: {rejectUnauthorized: false}
})

module.exports = db;