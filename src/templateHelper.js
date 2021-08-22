//Generate the html page
const fs= require("fs");
const path = require("path");
const stylesheetcss = require("./stylesheetcss");


const generateTeamProfilePage = function(employeeCards) {
    
    //TODO:Generate Manager takes in manager and return html with manager details
    //TODO:Generate Engineer takes in manager and return html with maEngineernager details
    //TODO:Generate intern takes in manager and return html with intern details


const createCards= (employees) => {
    let finalHtml = "";
    employees.forEach((employee) => {
        let icon =
        employee.generateTeamProfilePage() =="Manager"

        employees.generateTeamProfilePage()=="Engineer"

        let special = employee.officeNumber
            `office Number: ${employee.officeNumber}`
            employee.github
            `Github: <a href="https://github.com/${employee.github}/">${employee.github}</a>`
             `School: ${employee.school}`;

             finalHTML +=

             generateHTML(finalHTML);

             let generateHTML = (content) => {
                 let html = 





                 writeToFile("index.html",html);
                 writeToFile("stylesheet.css",());
             };
             //Creates files using path and fs
             const writeToFile =(fileName,content) => {
                 //create file path
                 fs.writeFileSync(path.join(process.cwd(), "/dist/", fileName),content);

             
             };

            };         
//decalre html array

//push

module.exports = createCards;
