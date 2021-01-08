const Employee = require('../lib/Employee.js');

test('get employee details', () => {
    const employee = new Employee('Leo', '55', 'leo@gmail.com')

    expect(employee.name).toBe('Leo');
    expect(employee.id).toBe('55');
    expect(employee.email).toBe('leo@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(Object));
}); 