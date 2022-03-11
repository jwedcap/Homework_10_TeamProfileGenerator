const inquirer = require("inquirer");
const fs = require('fs');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const employeeArray = [];
const newFile = [];

console.log('Hi, welcome to The Team Profile Generator');


//Creates the Array if Question Prompts
function managerQuestions(){
inquirer.prompt([

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
 }
])

//Function for managerQuestion Responses
.then(function (response) {

    const manager = new Manager(
        response.teamManagerName,
        response.teamManagerEmployeeId,
        response.teamManagerEmail,
        response.teamManagerOfficeNumber);

    employeeArray.push(manager);

    if (response.ManagerNumber !== "") {
        newEmployee();
    }
})
}

managerQuestions();

//Function for Employee Prompt
function newEmployee() {
    //Add Engineer or Intern
  inquirer.prompt([
    {
        type: "list",
        name: "newEmployee",
        message: "Which type of Employee would you like to add?",
        choices: [
            "Engineer",
            "Intern",
            "Finished Adding New Employees"
        ]}
  ])
    

        .then(function (response) {
            if (response.newEmployee === "Engineer") {
                engineerQuestions();
            } else if (response.newEmployee === "Intern") {
                internQuestions();
            } else {
                newHtml();
            }
        })
    }


    //Function for if Engineer is choosen
    function engineerQuestions() {
        inquirer.prompt([
                {
                    type: 'input',
                    name: "engineerName",
                    message: "What is your Engineer's Name?",
                },
    
                {
                    type: 'input',
                    name: "engineerEmployeeId",
                    message: "What is Engineer's Employee ID?",
                },
    
                {
                    type: 'input',
                    name: "engineerEmail",
                    message: "What is your Engineer's Email?",
                },
    
                {
                    type: 'input',
                    name: "engineerGitHub",
                    message: "What is your Employee's GitHub Username?",
                },
            ])
    
            .then(function (response) {
    
                const engineer = new Engineer(
                    response.engineerName,
                    response.engineerEmployeeId,
                    response.engineerEmail,
                    response.engineerGitHub);
    
                employeeArray.push(engineer);
    
                if (response.engineerGitHub !== "") {
                    //Loop back to newEmployee function/prompt
                    newEmployee();
                }
            })
    }


    //Function for if Intern is choosen
    function internQuestions() {
        inquirer
            .prompt
            ([
                {
                    type: 'input',
                    name: "internName",
                    message: "What is your Intern's Name?",
                },
    
                {
                    type: 'input',
                    name: "internEmployeeId",
                    message: "What is your Intern's Employee ID?",
                },
    
                {
                    type: 'input',
                    name: "internEmail",
                    message: "What is your Intern's Email?",
                },
    
                {
                    type: 'input',
                    name: "internSchool",
                    message: "Where does your Intern go to School?",
                },
            ])
    
            .then(function (response) {
    
                const intern = new Intern(
                    response.internName,
                    response.internEmployeeId,
                    response.internEmail,
                    response.internSchool);
    
                employeeArray.push(intern);
    
                if (response.internSchool !== "") {
                    //Loop back to newEmployee function/prompt
                    newEmployee();
                }
            })
    }
    

    //HTML Base Code
    function newHtml(){
        let cardArray = []
        let html = `
<!doctype html>
<html lang="en">
    <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <title>Team Profile Generator</title>
    </head>
    <body>
    <h1 class="jumbotron jumbotron-fluid text-center">My Team</h1>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
</html>`

newFile.push(html);

for (let i = 0; i < employeeArray.length; i++) {
    if (employeeArray[i].officeNumber) {
        cardArray.innerHTML =
            `            <div class="card text-center ml-4 mr-4 mb-5 border-dark">
            <div class="card-body bg-danger text-light">
                <h4 class="card-header">Name: ${employeeArray[i].name}</h4>
                <h4 class="card-title">${employeeArray[i].getRole()}</h4>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employeeArray[i].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${employeeArray[i].email}">${employeeArray[i].email}</a></li>
                <li class="list-group-item">Phone Number: ${employeeArray[i].officeNumber}</li>
            </ul>
        </div>`
    } else if (employeeArray[i].github) {
        cardArray.innerHTML +=
            `
    <div class="card text-center ml-4 mr-4 mb-5 border-dark"></div>
    <div class="card-body bg-info text-light">
        <h4 class="card-header">${employeeArray[i].name}</h4>
        <h4 class="card-title">${employeeArray[i].getRole()}</h4>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${employeeArray[i].id}</li>
    <li class="list-group-item">Email: <a href="mailto:${employeeArray[i].email}">${employeeArray[i].email}</a></li>
    <li class="list-group-item"><a href="${employeeArray[i].getGithub()}" target= "_blank">GitHub</a></li>
    </ul>
</div>
`
    } else if (employeeArray[i].school) {
        cardArray.innerHTML +=       `
    <div class="card text-center ml-4 mr-4 mb-5 border-dark">
    <div class="card-body bg-warning text-light">
    <h4 class="card-header">${employeeArray[i].name}</h4>
    <h4 class="card-title">${employeeArray[i].getRole()}</h4>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${employeeArray[i].id}</li>
    <li class="list-group-item">Email: <a href="mailto:${employeeArray[i].email}">${employeeArray[i].email}</a></li>
    <li class="list-group-item">School: ${employeeArray[i].school}</li>
    </ul>
</div>
    `
    }
    newFile.push(cardArray.innerHTML);
    }

    
    fs.writeFile("./dist/index.html", newFile.join(""), function (err) {
        err ? console.error(err) : console.log('Team Profile has been generated')
    })

}