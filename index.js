const process = require("node:process");
const fs = require("fs");
const inquirer = require("inquirer");
const tracker = require("./include/tracker.js");

const main =()=> {
   tracker.viewAllDepartments();
   tracker.viewAllRoles();
   tracker.viewAllEmployees();
   tracker.close();
   
   process.exitCode = 0; return;
}

main();
