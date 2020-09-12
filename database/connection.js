const mysql = require("mysql");


// Accessing the database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Alex-3891!",
    database: "employees"
});

connection.connect(function (err) {
    if (err) throw err;
 
});

module.exports = connection;