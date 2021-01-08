const Employee = require('../lib/Employee.js');
const Intern = require('../lib/Intern.js');


test('create a new instance of object with no parameter', () => {
    const intern = new Intern("Jill", "d@d.com", "90", "UCF");

    expect(intern).toEqual(expect.any(Object));
});

test('create a new instance of object with name', () => {
    const name = "Jill";
    const intern = new Intern(name);

    expect(intern.name).toEqual("Jill");
});

test('create a new instance of object with email', () => {
    const email = "d@d.com";
    const intern = new Intern("Jill", email);

    expect(intern.email).toEqual("d@d.com");
});

test('create a new instance of object with id', () => {
    const id = "90";
    const intern = new Intern("Jill", "d@d.com", id);

    expect(intern.id).toEqual("90");
});

test('returns name via getName function', () => {
    const intern = new Intern("Jill", "d@d.com", "90");

    expect(intern.getName()).toEqual("Jill");
});

test('returns id via getId function', () => {
    const intern = new Intern("Jill", "d@d.com", "90");

    expect(intern.getId()).toEqual("90");
});

test('returns email via getEmail function', () => {
    const intern = new Intern("Jill", "d@d.com", "90");

    expect(intern.getEmail()).toEqual("d@d.com");
});

test('returns school name via getSchool function', () => {
    const school = "UCF";
    const intern = new Intern("Jill", "d@d.com", "90", school);

    expect(intern.getSchool()).toEqual("UCF");
});

test('returns Intern role', () => {
    const intern = new Intern("Jill", "d@d.com", "90");

    expect(intern.getRole()).toEqual("Intern");
});