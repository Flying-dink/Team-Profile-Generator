const inquirer = require('inquirer');
const fs = require('fs');

//Team Profiles
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require( "./lib/Intern");
const { mainModule } = require("process");


//Team Array
const teamArray = [];
const generateHTML =require('./src/templateHelper')


//function initApp() {
   //startHtml();
    //addTeamMember();
//}

//function addTeamMember() {
  //  inquirer.prompt([{
    //    message:"Enter team member's name",
      //  name: "Name"
    
//},
//{       
   // type: "list",
    //message: "Select team member's role",
    //choices: [
      //  "Manager",
        //"Engineer",
        //"Intern",
  //  ],

          //name: "role"
//},
//{ 
     // message: "Enter team members id",
    // name: "id"


    //Manager prompts

    const addManager = () => {
        return inquirer.prompt ([
            {
                type: 'input',
                name: 'name',
                message: 'The name of the manager',
                validate: nameInput=> {
                    if (nameInput) {
                        return true;
                    }else {
                        console.log ("please enter the manager's name");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter the manager's id.",
                validate: nameInput => {
                    if (isNaN(nameInput)) {
                        console.log ("Please enter the manager's ID")
                        return false;
                    }else {
                            return true;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "Please enter the manager's email",
                },

                {
                    type: 'input',
                    name: 'officeNumber',
                    message: "Please enter the manager's office number",
                    
                 }

     ])}

     .then(managerInput => {
         const { name, id, email, officeNumber } = managerInput;
         const manager = new Manager (name, id, email, officeNumber);

         teamArray.push(manager);
         console.log(manager);

     })
    

