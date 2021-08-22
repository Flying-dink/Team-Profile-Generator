//Generate the html page
const fs= require("fs");
const path = require("path");
const stylesheetcss = require("./stylesheetcss");



    
    //TODO:Generate Manager takes in manager and return html with manager details
    //TODO:Generate Engineer takes in manager and return html with maEngineernager details
    //TODO:Generate intern takes in manager and return html with intern details


const createCards= (employees) => {
    let HTML = "";
    employees.forEach((employeeData) => {
        let icon =
        employee.getRole() =="Manager"
        `<i class="fa-solid fa-user-tie"></i>` 
        employees.getRole()=="Engineer"
        `<i class="fa-solid fa-glasses-round"></i>`
        employees.getRole()=="Intern"
        `<i class="fa-solid fa-graduation-cap"></i>`
        let other = employee.officeNumber
            `office Number: ${employee.officeNumber}`
            employee.github
            `Github: <a href="https://github.com/${employee.github}/">${employee.github}</a>`
             `School: ${employee.school}`;

             HTML +=` <div class="card" style="width: 18rem;">
             <div class="card-header">
             <h5 class="card-title">${employee.name}</h5>
              <h5 class="card-title">${icon}${employee.getRole()}</h5>

             </div>
             <ul class="list-group list-group-flush">
               <li class="list-group-item">ID: ${employee.id}</li>
               <li class="list-group-item">Email: <a href=mailto:${employee.email}">${employee.email}<a></li>
               <li class="list-group-item">${other}</li>
             </ul>
           </div>;`
    });
             generateTeamProfilePage(HTML);

             let generateTeamProfilePage= (content) => {
                 let HTML = `<!DOCTYPE html>
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
                 ${content}
                 <body>
                 <div class="header">
                 <h1>My Team</h1>
                 </div>
                     
                 </body>
                 </html>`





                 writeToFile("index.html",html);
                 writeToFile("stylesheet.css",);
             };
             //Creates files using path and fs
             const writeToFile = (fileName,content) => {
                 //create file path
                 fs.writeFileSync(path.join(process.cwd(), "/dist/", fileName),content);
             
             
             };

            };         
//decalre html array
        
//push

module.exports = createCards;
