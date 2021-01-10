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
            newManager();
        });
}

// add Manager
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
        ])
        .then(function (data) {
            console.log("You have completed the manager's profile!");

            const name = data.name
            const email = data.email
            const id = data.id
            const officeNumber = data.officeNumber

            const addTeamMember = new Manager(name, email, id, officeNumber)
            teamRoster.push(addTeamMember)
            newTeamMember();

        })
};

//add team members
function newTeamMember() {
    inquirer.prompt([{
            type: "list",
            name: "addTeamMember",
            message: "Please select the team member you would like to add, or confirm if your team is complete:",
            choices: ["Engineer", "Intern", "My team is complete!"],
        }])
        .then(function (data) {
            switch (data.addTeamMember) {

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
                message: "What is the engineer's GitHub username?",
                validate: github => {
                    if (github) {
                        return true;
                    } else {
                        console.log("Please provide a GitHub username!");
                        return false;
                    }
                }
            },
        ])
        .then(function (data) {
            console.log("You have completed this engineers's profile!");

            const name = data.name
            const email = data.email
            const id = data.id
            const github = data.github

            const addTeamMember = new Engineer(name, email, id, github)
            teamRoster.push(addTeamMember)
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
        ])
        .then(function (data) {
            console.log("You have completed this intern's profile!");

            const name = data.name
            const email = data.email
            const id = data.id
            const school = data.school

            const addTeamMember = new Intern(name, email, id, school)
            teamRoster.push(addTeamMember)
            newTeamMember();

        })
};

function completeRoster() {
    const htmlArray = [];

    const html = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <title>My Team</title>
</head>

<body>

    <div class="container">
        <div class="row">
            <div class="col-sm">
                <h1 class="text-center text-white bg-danger h-100 fs-3 m-4 pb-2 pt-5">My Team</h1>
            </div>
        </div>
    </div>

    <div class="container m-6 p-5">

        <div class="row row-cols-3 justify-content-md-center">`

    htmlArray.push(html);

    for (let i = 0; i < teamRoster.length; i++) {
        let card = "";


        if (teamRoster[i].officeNumber) {
            card = `
                <div class="col">
                <div class="card text-white bg-primary p-2 m-5">
                    <div class="card-body">
                        <h5 class="card-title">${teamRoster[i].name}</h5>
                        <h6 class="card-subtitle mb-2 text-white"><i class="fas fa-mug-hot"></i> Manager
                        </h6>
                        <div class="card text-dark">
                            <ul class="list-group fs-6 list-group-flush">
                                <li class="list-group-item">ID: ${teamRoster[i].id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${teamRoster[i].email}"> ${teamRoster[i].email}</a></li>
                                <li class="list-group-item">Office Number: ${teamRoster[i].officeNumber}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> `
        }

        if (teamRoster[i].github) {
            card = `
                <div class="col">
                <div class="card text-white bg-primary p-2 m-5">
                    <div class="card-body">
                        <h5 class="card-title">${teamRoster[i].name}</h5>
                        <h6 class="card-subtitle mb-2 text-white"> <i class="fas fa-glasses"></i> Engineer</h6>
                        <div class="card text-dark">
                            <ul class="list-group fs-6 list-group-flush">
                                <li class="list-group-item">ID: ${teamRoster[i].id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${teamRoster[i].email}"> ${teamRoster[i].email}</a></li>
                                <li class="list-group-item">GitHub:<a href="https://github.com/${teamRoster[i].github}"> ${teamRoster[i].github}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> `
        }

        if (teamRoster[i].school) {
            card = `
                <div class="col">
                <div class="card text-white bg-primary p-2 m-5">
                    <div class="card-body">
                        <h5 class="card-title">${teamRoster[i].name}</h5>
                        <h6 class="card-subtitle mb-2 text-white"><i class="fas fa-user-graduate"></i> Intern</h6>
                        <div class="card text-dark">
                            <ul class="list-group fs-6 list-group-flush">
                                <li class="list-group-item">ID: ${teamRoster[i].id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${teamRoster[i].email}"> ${teamRoster[i].email}</a></li>
                                <li class="list-group-item">School: ${teamRoster[i].school}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> `
        }
        htmlArray.push(card);
    }

    const htmlClose = `
        </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous">
        </script>
    </body>   
    </html> `

    htmlArray.push(htmlClose);

    fs.writeFile("./dist/roster.html", htmlArray.join(""), function (err) {
        if (err) {
            console.log(err);
        }
    })
    console.log("Your team roster has been succesfully created!");
};

start();