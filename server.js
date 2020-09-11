const connection = require("./database/connection")
const inquirer = require("inquirer");
const cTable = require("console.table");




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