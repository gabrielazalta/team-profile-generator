const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager.js');


test('create a new instance of object with no parameter', () => {
    const manager = new Manager("Leo", "b@b.com", "60", "301");

    expect(manager).toEqual(expect.any(Object));
});

test('create a new instance of object with name', () => {
    const name = "Leo";
    const manager = new Manager(name);

    expect(manager.name).toEqual("Leo");
});

test('create a new instance of object with email', () => {
    const email = "b@b.com";
    const manager = new Manager("Leo", email);

    expect(manager.email).toEqual("b@b.com");
});

test('create a new instance of object with id', () => {
    const id = "60";
    const manager = new Manager("Leo", "b@b.com", id);

    expect(manager.id).toEqual("60");
});

test('returns name via getName function', () => {
    const manager = new Manager("Leo", "b@b.com", "60");

    expect(manager.getName()).toEqual("Leo");
});

test('returns id via getId function', () => {
    const manager = new Manager("Leo", "b@b.com", "60");

    expect(manager.getId()).toEqual("60");
});

test('returns email via getEmail function', () => {
    const manager = new Manager("Leo", "b@b.com", "60");

    expect(manager.getEmail()).toEqual("b@b.com");
});

test('returns office number via getOfficeNumber function', () => {
    const officeNumber = "301";
    const manager = new Manager("Leo", "b@b.com", "60", officeNumber);

    expect(manager.getOfficeNumber()).toEqual("301")
});

test('returns Manager role', () => {
    const manager = new Manager("Leo", "b@b.com", "60");

    expect(manager.getRole()).toEqual("Manager");
});