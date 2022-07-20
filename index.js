const process = require("node:process");
const fs = require("fs");
const inquirer = require("inquirer");
const tracker = require("./include/tracker.js");

const main =()=> {
   
   // Start Prompt
   inquirer
      .prompt([
         {
            name: "task",
            type: "list",
            choices: ["View All Departments",
               "View All Roles",
               "View All Employees",
               "Add A Department",
               "Add A Role",
               "Add An Employee"
            ]
         }

      ])
      .then( (answers) => {
         console.log(answers.task)
         switch (answers.task)
         {
            case "View All Departments":
               tracker.viewAllDepartments();
               break;
            case "View All Roles":
               tracker.viewAllRoles();
               break;
            case "View All Employees":
               tracker.viewAllEmployees();
               break;
            default: 
               break;
               return;
         }

         tracker.close();
      });

   process.exitCode = 0; return;
}

main();
