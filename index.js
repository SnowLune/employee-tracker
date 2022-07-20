const process = require("node:process");
const fs = require("fs");
const inquirer = require("inquirer");
const db = require("mysql2");
const tracker = require("./include/tracker.js")

const main =()=> {
   tracker.viewAllDepartments();
   process.exitCode = 0;
   return;
}

main();
