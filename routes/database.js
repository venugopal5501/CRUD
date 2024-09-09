const database = require('mssql');

var dbconfig = {
    server: 'DINCD-101',
    port: 1433,
    database: 'VenuGopal',
    user: 'Training',
    password: 'Training@123',
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