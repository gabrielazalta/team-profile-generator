const inquirer = require('inquirer');

Employee.prototype.getName = function() {
    inquirer.prompt({
        type: 'text',
        name: 'name',
        message: 'What is your name?'
    })
    .then(({ name }) => {
        this.employee = new Employee(name);
    });
};

Employee.prototype.getId = function() {
    inquirer.prompt({
        type: 'text',
        name: 'id',
        message: 'Please provide your Employee ID'
    })
    .then(({ id }) => {
        this.employee = new Employee(id);
    });
};

Employee.prototype.getEmail = function() {
    inquirer.prompt({
        type: 'text',
        name: 'email',
        message: 'Please provide your email address'
    })
    .then(({ email }) => {
        this.employee = new Employee(email);
    });
};

function getRole() {
    
}
module.exports = Employee;