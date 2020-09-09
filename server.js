const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");


// const connection = mysql.createConnection({
//     host: "localhost",
//     port: 6060,
//     user: "root",
//     password: "Alex-3891!",
//     database: "employee_mgmtdb"
// });

// connection.connect(function (err) {
//     if (err) throw err;
//     start();
// });

start = () => {
    inquirer
    .prompt({
        name: "startFunc",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View All Employees",
            "View All Employees by Department",
            "View All Employees by Manager",
            "Add Employee",
            "Add Department",
            "Add Role",
            "Update Employee Role"
        ]
    })
}

start();