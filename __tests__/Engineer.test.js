//importing Employee Constructor
const Employee = require("./Employee.test");

//Engineer Constructor extends employee constructor
class Engineer extends Employee {
    constructor (name, id, email, github) {

        //calling employee constructor 
        this. name, id, email;
        this.github = github;
         
        //returning github from input
        getGithub (); {
            return this.github;


        }
    } 
     //Override employee role to engineer
    getRole () {
        return "engineer";
    }

}
//to be exported
module.exports = engineer;
