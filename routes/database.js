const database = require('mssql');

var dbconfig = {
    server: 'localhost',
    port: 1433,
    database: 'venugopal',
    user: 'sa',
    password: 'Venugopal@123',
    trustServerCertificate: true
}

var connection = new database.ConnectionPool(dbconfig);

connection.connect(function (error) {
    if (error) {
        throw error;
    }
    else {
        console.log("success");
    }
})

module.exports = connection;