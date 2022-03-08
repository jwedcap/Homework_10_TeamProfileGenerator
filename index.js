const inquirer = require("inquirer");
var fs = require('fs');

console.log('Hi, welcome to The Team Profile Generator');

//Creates the Array if Question Prompts
const managerQuestions = [

  //Team Manager Name
  {
    type: 'input',
    name: 'teamManagerName',
    message: "What is the Team Manager's name?",
  },

   //Team Manager Employee ID
   {
    type: 'input',
    name: 'teamManagerEmployeeId',
    message: "What is the Team Manager's Employee ID?",
  },

   //Team Manager Email
   {
    type: 'input',
    name: 'teamManagerEmail',
    message: "What is the Team Manager's Email?",
  },

   //Team Manager Office Number
   {
    type: 'input',
    name: 'teamManagerOfficeNumber',
    message: "What is the Team Manager's Office Number?",
  },

  //Add Engineer or Intern
  {
    type: "checkbox",
    name: "newEmployee",
    message: "Which type of Employee would you like to add?",
    choices: [
        "Engineer",
        "Intern",
    ]},
]

inquirer.prompt(managerQuestions);