//Generate the html page
const fs = require("fs");
const path = require("path");
// const stylesheetcss = require("./stylesheetcss");

//manager Card
const generateManager = function (manager) {
  return `<div class="col-4 mt-4">
    <div class="card-header">
    <h5 class="card-title">${manager.name}</h5>
     <h5 class="card-title"><i class="fas fa-user-tie"></i> ${manager.getRole()}</h5>

    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
      <li class="list-group-item">Office Number: ${manager.officeNumber}</li>

    </ul>
  </div>`;
};

//engineer Card
const generateEngineer = function (engineer) {
  return `<div class="col-4 mt-4">
        <div class="card-header">
        <h5 class="card-title">${engineer.name}</h5>
         <h5 class="card-title"><i class="fas fa-glasses"></i> ${engineer.getRole()}</h5>

        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineer.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
         <li class="list-group-item"> Github: <a href="https://github.com/${engineer.github}/">${engineer.github}</a>

        </ul>
      </div>`;
};

//Intern Card
const generateIntern = function (intern) {
  return `<div class="col-4 mt-4">
          <div class="card-header">
          <h5 class="card-title">${intern.name}</h5>
           <h5 class="card-title"><i class="fas fa-graduation-cap"></i> ${intern.getRole()}</h5>
      
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item">School: ${intern.school}</li>
    </div>
</div>`;
};

/* 
  //TODO:Generate Manager takes in manager and return html with manager details
  //TODO:Generate Engineer takes in manager and return html with maEngineernager details
  //TODO:Generate intern takes in manager and return html with intern details

  //  let HTML = "";
  //employees.forEach((employeeData) => {
  //const createCards= (employees) => {
  //  let icon =
  //employee.getRole() =="Manager"
  //`<i class="fa-solid fa-user-tie"></i>`
  //employees.getRole()=="Engineer"
  //`<i class="fa-solid fa-glasses-round"></i>`
  //employees.getRole()=="Intern"
  //`<i class="fa-solid fa-graduation-cap"></i>`
  //let other = employee.officeNumber
  //  `office Number: ${employee.officeNumber}`
  //employee.github
  //`Github: <a href="https://github.com/${employee.github}/">${employee.github}</a>`
  //`School: ${employee.school}`;

  //HTML +=` <div class="card" style="width: 18rem;">
  //<div class="card-header">
  //<h5 class="card-title">${employee.name}</h5>
  //<h5 class="card-title">${icon}${employee.getRole()}</h5>

  //</div>
  //<ul class="list-group list-group-flush">
  // <li class="list-group-item">ID: ${employee.id}</li>
  //<li class="list-group-item">Email: <a href=mailto:${employee.email}">${employee.email}<a></li>
  //<li class="list-group-item">${other}</li>
  //</ul>
  //</div>;`
  //});
*/

//push array to page
let generateHTML = (data) => {
  let pageArray = [];
  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === "Manager") {
      const ManagerCard = generateManager(employee);
      pageArray.push(ManagerCard);
    }

    if (role === "Engineer") {
      const EngineerCard = generateEngineer(employee);
      pageArray.push(EngineerCard);
    }

    if (role === "Intern") {
      const internCard = generateIntern(employee);

      pageArray.push(internCard);
    }
  }

  const employeeCards = pageArray.join("");
  console.log(employeeCards);

  generateTeamPage(employeeCards);
};

const generateTeamPage = function (content) {
  let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href= "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js" />
      <script src="https://kit.fontawesome.com/876c7fe23e.js" crossorigin="anonymous"></script>
      <title>My Team</title>
    </head>
    <body>
      <div class="header text-center">
        <h1>My Team</h1>
      </div>
      <main class="container main-wrapper min-vh-100">
        <div class="d-flex justify-content-center p-4">
          <div class="row row-cols-1 row-cols-md-2 g-5 w-85">
            ${content}
          </div>
        </div>
      </main>
    </body>
    </html>`;

  writeToFile("index.html", html);
  // writeToFile("stylesheet.css");
};

//Creates files using path and fs
const writeToFile = (fileName, content) => {
  //create file path
  fs.writeFileSync(path.join(process.cwd(), "/dist/", fileName), content);
};

module.exports = generateHTML;
