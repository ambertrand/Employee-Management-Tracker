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
    ]).then(function(answers) {
        switch (answers.startFunc) {
            case "View All Employees":
                connection.query("SELECT * from employee", function(err, data) {
                    if (err) throw err;
                    console.table(data);
                });
                break;
        }
    })
}

// Starts prompts for user in terminal
start(connection);