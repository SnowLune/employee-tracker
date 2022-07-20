// tracker.js
// functions for modifying the employees database

const mysql = require("mysql2");
const { table } = require("table");

const db = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'Sm9*rcP8sn$g',
   database: 'employees_test'
});

function close() {
   db.end();
}

function viewAllDepartments()
{
   db.query("SELECT * FROM department;", (err, results)=> {
      if (err) throw err;
      
      // Map Data for use by Table
      let data = results.map(record=>[record.name, record.id])
      data.unshift(["DEPARTMENT NAME", "ID"]);

      // Print Table
      console.log(table(data))
   });
}

function viewAllRoles()
{
   db.query("SELECT * FROM role;", (err, results)=> {
      if (err) throw err;
      
      // Map Data for use by Table
      let data = results.map(record=>[record.title, record.salary, 
         record.id, record.department_id
      ])
      data.unshift(["ROLE TITLE", "SALARY", "ID", "DEPT ID"]);

      // Print Table
      console.log(table(data))
   });
}

function viewAllEmployees()
{
   db.query("SELECT * FROM employee;", (err, results)=> {
      if (err) throw err;
      
      // Map Data for use by Table
      let data = results.map(record=>[record.last_name, record.first_name, 
         record.id, record.role_id, 
            record.manager_id ? record.manager_id : "NULL"
      ])
      data.unshift(["LAST NAME",  "FIRST NAME", "ID", "ROLE ID", "MANAGER ID"]);

      // Print Table
      console.log(table(data))
   });
}

function addDepartment()
{
}

function addRole()
{
}

function addEmployee()
{
}

module.exports = { viewAllDepartments, close , viewAllRoles, viewAllEmployees, 
   addDepartment, addRole, addEmployee };
