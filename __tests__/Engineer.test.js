const Employee = require('../lib/Employee.js');
const Engineer = require('../lib/Engineer.js');


test('create a new instance of object with no parameter', () => {
    const engineer = new Engineer("Bill", "c@c.com", "75", "bill@github.com");

    expect(engineer).toEqual(expect.any(Object));
});

test('create a new instance of object with name', () => {
    const name = "Bill";
    const engineer = new Engineer(name);

    expect(engineer.name).toEqual("Bill");
});

test('create a new instance of object with email', () => {
    const email = "c@c.com";
    const engineer = new Engineer("Bill", email);

    expect(engineer.email).toEqual("c@c.com");
});

test('create a new instance of object with id', () => {
    const id = "75";
    const engineer = new Engineer("Bill", "c@c.com", id);

    expect(engineer.id).toEqual("75");
});

test('returns name via getName function', () => {
    const engineer = new Engineer("Bill", "c@c.com", "75");

    expect(engineer.getName()).toEqual("Bill");
});

test('returns id via getId function', () => {
    const engineer = new Engineer("Bill", "c@c.com", "75");

    expect(engineer.getId()).toEqual("75");
});

test('returns email via getEmail function', () => {
    const engineer = new Engineer("Bill", "c@c.com", "75");

    expect(engineer.getEmail()).toEqual("c@c.com");
});

test('returns gitHib username via getGitHub function', () => {
    const github = "bill@github.com";
    const engineer = new Engineer("Bill", "c@c.com", "75", github);

    expect(engineer.getGitHub()).toEqual("bill@github.com")
});

test('returns Engineer role', () => {
    const engineer = new Engineer("Bill", "c@c.com", "75");

    expect(engineer.getRole()).toEqual("Engineer");
});