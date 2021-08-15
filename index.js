const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require( "./lib/Intern");
const { mainModule } = require("process");

const team = [];


function initApp() {
   startHtml();
    addTeamMember();
}

function addTeamMember() {
    inquirer.prompt([{
        message:"Enter team member's name",
        name: "Name"
    
},
{       
    type: "list",
    message: "Select team member's role",
    choices: [
        "Manager",
        "Engineer",
        "Intern",
    ],

          name: "role"
}
{   message: "Enter team members id",
    name: "id"
}
{    message: "Enter team member's e mail address",
     name: "e mail"
}])

}
.then(function({getRole,moreMembers}) {
    let newMember;
    if (role ==="Engineer") {
        newMember = new Engineer(name, id, email,getRole );
    }
    else if (role ==="Intern") {
        newMember = newIntern(name, id, email, getRole);

    }
    else {
        newMember = new Manager (name. id, email, getRole);
    }
    employees.push(newMember);
    addHtml(newMember)
    .then(function() {
        if (moreMembers ==="yes") {
            sddMember ();
        }else {
            finishHtml();

        }
        });
    });





