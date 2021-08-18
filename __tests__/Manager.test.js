//using Manager constructor

const Manager = require('../lib/Manager.js');

//creating manager object
test('creates a Manager object' ,() => {
    const manager = new Manager ( Catherine);
    expect(manager.officeNumber).toEqual(expect.any('Number'));
});

//gets role form getRole()
test('gets role of employee' ,() => {
    const manager = new Manager ('Catherine');
    expect(manager.getRole()).toEqual("Manager");
});

module.exports = {
    Manager
}