const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require( "./lib/Intern");

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
    message: "Select team member's position",
    choices: [
        "Manager",
        "Engineer",
        "Manager",
    ],

          name: "role"
}