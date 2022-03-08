const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email); //Calling parent contructor
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        //override to return Engineer
        return "Engineer";
    }
    
}

module.exports = Engineer;