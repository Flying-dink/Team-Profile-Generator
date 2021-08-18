//using Employee constructor

const Employee = require('../lib/Employee.js');


//creates employee object
test('creates an employee object', () => {
    const employee = new Employee('');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employy.email).toEqual(expect.any(String));
});

//gets id from get id()
test('gets employee name' , () => {
    const employee = new Employee();
    expect(employee.getName()).toEqual(expect.any(String));
}) 

//gets emails form getEmail()
test('gets employee email' ,() => {
    const employee = new Employee('Catherine');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

//gets role from getRole()
test('gets role of employee' ,() => {
    const employee = new Employee ('Catherine');
    
    expect (employee.getRole()).toEqual("Employee");
});
