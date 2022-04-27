const generateTeam = require("./src/generateTeam");
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

teamArray = [];

function runApp () {

  function createTeam () {
    inquirer.prompt([{
      type: "list",
      message: "Choose an employee role.",
      name: "addEmployeePrompt",
      choices: ["Manager", "Engineer", "Intern", "No more team members are needed."]
    }]).then(function (userInput) {
      switch(userInput.addEmployeePrompt) {
        case "Manager":
          addManager();
          break;
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;

        default:
          htmlBuilder();
      }
    })
  }

function addManager() {
  inquirer.prompt ([
    
    {
      type: "input",
      name: "managerName",
      message: "Enter manager's name?"
    },

    {
      type: "input",
      name: "managerId",
      message: "Enter manager's employee ID number?"
    },

    {
      type: "input",
      name: "managerEmail",
      message: "Enter manager's email address?"
    },

    {
      type: "input",
      name: "managerOfficeNumber",
      message: "Enter manager's office phone number?"
    }

  ]).then(answers => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    teamArray.push(manager);
    createTeam();
  });

}

function addEngineer() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "engineerName",
        message: "Enter engineer's name?"
      },

      {
        type: "input",
        name: "engineerId",
        message: "Enter engineer's employee ID number?" 
      },

      {
        type: "input",
        name: "engineerEmail",
        message: "Enter engineer's email address?"
      },

      {
        type: "input",
        name: "engineerGithub",
        message: "Enter engineer's GitHub username?"
      }

    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamArray.push(engineer);
      createTeam();
    });

  }

  function addIntern() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "internName",
        message: "Enter intern's name?"
      },

      {
        type: "input",
        name: "internId",
        message: "Enter intern's employee ID number?" 
      },

      {
        type: "input",
        name: "internEmail",
        message: "Enter intern's email address?"
      },

      {
        type: "input",
        name: "internSchool",
        message: "Enter intern's current school?"
      }

    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamArray.push(intern);
      createTeam();
    });

  }


function htmlBuilder () {
    console.log("New Team Created!")

    fs.writeFileSync('./dist/index.html', generateTeam(teamArray), "UTF-8")

}

createTeam();

}

runApp();