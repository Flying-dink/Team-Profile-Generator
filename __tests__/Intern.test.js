//using intern constructor

const Intern = require('../lib/Intern.js');

//creating intern object
test('creates an  intern object' , () => {
    const intern = new Intern();
    expect(typeof(intern)).toEqual("object");
});

//gets school from getSchool()
test('gets employee echool', () => {
    const intern = new Intern ('bob',1,'acb@mail.com','university');
    expect(intern.getSchool()).toEqual('university');
});

//gets role form getRole()
test('gets role of employee' , () => {
    const intern = new Intern ('Catherine');
    expect(intern.getRole()).toEqual("Intern");

});
