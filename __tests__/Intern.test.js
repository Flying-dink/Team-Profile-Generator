//using intern constructor

const Intern = require('../lib/Intern.js');

//creating intern object
test('creates an  intern object' , () => {
    const intern = new Intern(Catherine);
    expect(intern.school) .toEqual(expect.any(String));
});

//gets school from getSchool()
test('gets employee echool', () => {
    const intern = new Intern ('Catherine');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

//gets role form getRole()
test('gets role of employee' , () => {
    const intern = new Intern ('Catherine');
    expect(intern.getRole()).toEqual("Intern");

});
