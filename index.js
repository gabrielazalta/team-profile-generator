//logic

// const { start } = require("repl");

const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")

let teamRoster = [];

//start
function start() {
    inquirer.prompt([{
            type: "confirm",
            name: "start",
            message: "Welcome to your team profile generator! Please confirm to continue",
            default: true
        }])
        .then(function (data) {
            newTeamMember();
        });
}

//add team members
function newTeamMember() {
    inquirer.prompt([{
            type: "list",
            name: "addTeamMember",
            message: "Please select the team member you would like to add, or confirm if your team is complete:",
            choices: ["Manager", "Engineer", "Intern", "My team is complete!"],
        }])
        .then(function (data) {
            switch (data.addTeamMember) {
                case "Manager":
                    newManager();
                    break;

                case "Engineer":
                    newEngineer();
                    break;

                case "Intern":
                    newIntern();
                    break;

                case "My team is complete!":
                    completeRoster();
                    break;
            }
        });
}

// add new manager
function newManager() {
    inquirer.prompt([{
                type: "input",
                name: "name",
                message: "What is the manager's name?",
                validate: name => {
                    if (name) {
                        return true;
                    } else {
                        console.log("Please provide a name!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the manager's email?",
                validate: email => {
                    if (email) {
                        return true;
                    } else {
                        console.log("Please provide an email!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the manager's ID?",
                validate: id => {
                    if (id) {
                        return true;
                    } else {
                        console.log("Please provide an ID!");
                        return false;
                    }
                }
            },
            {
                type: "number",
                name: "officeNumber",
                message: "What is the manager's office number?",
                validate: officeNumber => {
                    if (officeNumber) {
                        return true;
                    } else {
                        console.log("Please provide an office number!");
                        return false;
                    }
                }
            },
            {
                type: "confirm",
                name: "complete",
                message: "You have completed this team member's profile! Confirm to continue.",
                default: true
            },
        ])
        .then(function (data) {
            const name = data.name
            const email = data.email
            const id = data.id
            const officeNumber = data.officeNumber

            const manager = new Manager(name, email, id, officeNumber)
            teamRoster.push(manager)
            newTeamMember();

        })
};

// add new Engineer
function newEngineer() {
    inquirer.prompt([{
                type: "input",
                name: "name",
                message: "What is the engineer's name?",
                validate: name => {
                    if (name) {
                        return true;
                    } else {
                        console.log("Please provide a name!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the engineer's email?",
                validate: email => {
                    if (email) {
                        return true;
                    } else {
                        console.log("Please provide an email!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the engineer's ID?",
                validate: id => {
                    if (id) {
                        return true;
                    } else {
                        console.log("Please provide an ID!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "github",
                message: "What is the engineer's github username?",
                validate: github => {
                    if (github) {
                        return true;
                    } else {
                        console.log("Please provide a GitHub username!");
                        return false;
                    }
                }
            },
            {
                type: "confirm",
                name: "complete",
                message: "You have completed this team member's profile! Confirm to continue.",
                default: true
            },
        ])
        .then(function (data) {
            const name = data.name
            const email = data.email
            const id = data.id
            const github = data.github

            const engineer = new Engineer(name, email, id, github)
            teamRoster.push(engineer)
            newTeamMember();

        })
};

// add new Intern
function newIntern() {
    inquirer.prompt([{
                type: "input",
                name: "name",
                message: "What is the intern's name?",
                validate: name => {
                    if (name) {
                        return true;
                    } else {
                        console.log("Please provide a name!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the intern's email?",
                validate: email => {
                    if (email) {
                        return true;
                    } else {
                        console.log("Please provide an email!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the intern's ID?",
                validate: id => {
                    if (id) {
                        return true;
                    } else {
                        console.log("Please provide an ID!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "school",
                message: "What is the intern's school?",
                validate: school => {
                    if (school) {
                        return true;
                    } else {
                        console.log("Please provide a school!");
                        return false;
                    }
                }
            },
            {
                type: "confirm",
                name: "complete",
                message: "You have completed this team member's profile! Confirm to continue.",
                default: true
            },
        ])
        .then(function (data) {
            const name = data.name
            const email = data.email
            const id = data.id
            const school = data.school

            const intern = new Intern(name, email, id, school)
            teamRoster.push(intern)
            newTeamMember();

        })
};

start();


//create the webpage with the manager (how you will design will be like readmegen function with filable vars (m.email , m.getRole()))
//if you are not done, then we ask for startfx start()