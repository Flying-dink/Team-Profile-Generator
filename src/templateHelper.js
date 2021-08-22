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
        `<i class="fa-solid fa-user-tie"></i>` 
        employees.generateTeamProfilePage()=="Engineer"
        `<i class="fa-solid fa-glasses-round"></i>`
        employees.generateTeamProfilePage()=="Intern"
        `<i class="fa-solid fa-graduation-cap"></i>`
        let special = employee.officeNumber
            `office Number: ${employee.officeNumber}`
            employee.github
            `Github: <a href="https://github.com/${employee.github}/">${employee.github}</a>`
             `School: ${employee.school}`;

             finalHTML +=` <div class="card" style="width: 18rem;">
             <div class="card-header">
             <h5 class="card-title">${employee.name}</h5>
              <h5 class="card-title">${icon}${employee.getRole()}</h5>

             </div>
             <ul class="list-group list-group-flush">
               <li class="list-group-item">ID: ${employee.id}</li>
               <li class="list-group-item">Dapibus ac facilisis in</li>
               <li class="list-group-item">Vestibulum at eros</li>
             </ul>
           </div>;`
    });
             generateHTML(finalHTML);

             let generateHTML = (content) => {
                 let html = `<!DOCTYPE html>
                 <html lang="en">
                 <head>
                     <meta charset="UTF-8">
                     <meta http-equiv="X-UA-Compatible" content="IE=edge">
                     <meta name="viewport" content="width=device-width, initial-scale=1.0">
                     <link
                    href= "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js">
                    <script src="https://kit.fontawesome.com/876c7fe23e.js" crossorigin="anonymous"></script>
                     <title>My Team</title>
                 </head>
                 <body>
                     
                 </body>
                 </html>`





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
