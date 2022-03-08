const Employee = require("./Employee");

//Extending Employee with Manager properties
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email); //Calling parent contructor to avoid duplication
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    //Override to return Manager
    return "Manager";
  }

}

module.exports = Manager;