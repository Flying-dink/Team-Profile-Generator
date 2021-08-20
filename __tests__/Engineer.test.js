//using Engineer constructor

const Engineer = require('../lib/Engineer.js');

//creating engineer object
//test('creates an Engineer object',  () => {
  //  const engineer = new Engineer();
    //expect(engineer.github) .toEqual(expect.any(String));

//});
//gets github from getGithub()
//test('gets engineer github value', () => {
  //  const engineer = new Engineer();
    //expect(engineer.getgithub()).toEqual(expect.stringContaining(engineer.github.toString()));
//});


//gets role from getRole()
//test('gets role of employee' , () => {
  //  const engineer = new Engineer ();
    //expect(engineer.getRole()).toEqual("Engineer");

//});

//module.export = {
  //  Engineer
//}
test("creates an Engineer object", () => {
    expect(employee).toEqual(expect.any(object));
});  

test("Engineer object has a valid name", () => {
    expect(engineer.name).toBe("Bob");
    expect(engineer.getName()).toEqual(engineer.name);
});

test("Engineer Object has a valid id", () => {


    expect(engineer.id).toBe(1);

    expect(engineer.getId()).toEqual(engineer.name);
});


test("Engineer object has a valid email" , () => {
    expect(engineer.email).toBe("Bobtest.com");
    expect(engineer.getEmail()).toEqual(engineer.email);
}); 


test( "Engineer object has a valid role" , () => {
    expect(engineer.getRole()).toEqual("Engineer");
    
});
