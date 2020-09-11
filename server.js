const connection = require("./database/connection")
const inquirer = require("inquirer");

// Exit function
// const endApp = () => {
//     console.log("Goodbye!");
//     connection.end();
//     process.exit();
// }


start = (connection) => {
    inquirer.prompt([
        {
            name: "startFunc",
            type: "rawlist",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "View All Employees by Department",
                "View All Employees by Manager",
                "Add Employee",
                "Add Department",
                "Add Role",
                "Update Employee Role",
                "Exit Application"
            ]
        }
    ]).then(function (answers) {
        switch (answers.startFunc) {
            case "View All Employees":
                connection.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;", function (err, data) {
                    if (err) throw err;
                    console.table(data);
                });
                break;
        }
    })
}




// Starts prompts for user in terminal
start(connection);