const {
    test,
    expect
} = require('@jest/globals');

const Employee = require('../lib/Employee.js');

test('create a new instance of object with no parameter', () => {
    const employee = new Employee();

    expect(employee).toEqual(expect.any(Object));
});

test('create a new instance of object with name', () => {
    const name = "Sam";
    const employee = new Employee(name);

    expect(employee.name).toEqual("Sam");
});

test('create a new instance of object with email', () => {
    const email = "a@a.com";
    const employee = new Employee("Sam", email);

    expect(employee.email).toEqual("a@a.com");
});

test('create a new instance of object with id', () => {
    const id = "55";
    const employee = new Employee("Sam", "a@a.com", id);

    expect(employee.id).toEqual("55");
});

test('returns name via getName function', () => {
    const employee = new Employee("Sam", "a@a.com", "55");

    expect(employee.getName()).toEqual("Sam");
});

test('returns id via getId function', () => {
    const employee = new Employee("Sam", "a@a.com", "55");

    expect(employee.getId()).toEqual("55");
});

test('returns email via getEmail function', () => {
    const employee = new Employee("Sam", "a@a.com", "55");

    expect(employee.getEmail()).toEqual("a@a.com");
});

test('returns Employee role via getRole function', () => {
    const employee = new Employee("Sam", "a@a.com", "55");

    expect(employee.getRole()).toEqual("Employee");
});