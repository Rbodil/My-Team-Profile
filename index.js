const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const { writeFile, copyFile } = require('./lib/generate-site.js')
const generatePage = require('./src/page-template')

const newTeam = [];
const teamIds = [];

function start() {

    function getManager() {
        console.log("Welcome to My Team Profile")
        console.log("Let's add your team members, starting with the manager")
        inquirer.prompt([
            {
                message: "What is the manager's name?",
                type: "input",
                name: "managerName"
            },
            {
                message: "What their employee ID number?",
                type: "input",
                name: "managerID"
            },
            {
                message: "What is their email address?",
                type: "input",
                name: "managerEmail"
            },
            {
                message: "What is their office number?",
                type: "input",
                name: "managerNumber"
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamMembers.push(manager);
            idArray.push(answers.managerId);
            addEmployee();
        });
    }

    function addEmployee() {

        inquirer.prompt([
            {
                type: "list",
                name: "addEmployee",
                message: "Which type of team member would you like to add?",
                choices: [
                    "Engineer",
                    "Intern",
                    "I don't want to add any more team members"
                ]
            }
        ]).then(userChoice => {
            switch (userChoice.memberChoice) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    generatePage();
            }
        });
    }

    function addEngineer() {
        inquirer.prompt([
            {
                message: "What is their name?",
                type: "input",
                name: "engineerName"

            },
            {
                message: "What is their Employee ID?",
                type: "input",
                name: "engineerId"

            },
            {

                message: "What is their email address?",
                type: "input",
                name: "engineerEmail"

            },
            {

                message: "What is their GitHub username?",
                type: "input",
                name: "engineerGithub"

            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamMembers.push(engineer);
            idArray.push(answers.engineerId);
            addEmployee();
        });
    }

    function addIntern() {
        inquirer.prompt([
            {
                message: "What is their name?",
                type: "input",
                name: "internName"

            },
            {
                message: "What is their Employee ID?",
                type: "input",
                name: "internId"

            },
            {

                message: "What is their email address?",
                type: "input",
                name: "internEmail"

            },
            {

                message: "What school do they attend?",
                type: "input",
                name: "internSchool"

            }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamMembers.push(intern);
            idArray.push(answers.internId);
            addEmployee();
        });
    }


    getManager();

};

start();





