const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Alex-3891!",
    database: "employee_mgmtdb"
});

connection.connect(function (err) {
    if (err) throw err;

});

module.exports = connection;