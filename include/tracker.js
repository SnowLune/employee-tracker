// tracker.js
// functions for modifying the employees database

const mysql = require("mysql2");

const db = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'Sm9*rcP8sn$g',
   database: 'employees_test'
});

function viewAllDepartments()
{
   db.query("SELECT * FROM department", (err, results)=> {
      if (err) throw err;
      console.log(results);
   });
}

function viewAllRoles()
{
}

function viewAllEmployees()
{
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

function close()
{
   db.close();
}

module.exports = { viewAllDepartments, viewAllRoles, viewAllEmployees, 
   addDepartment, addRole, addEmployee, close
}
