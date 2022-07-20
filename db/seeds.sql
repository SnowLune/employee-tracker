USE employees_test;

INSERT INTO department (name) VALUES
   ('Accounting'),
   ('IT'),
   ('Marketing'),
   ('Design'),
   ('Management'),
   ('Human Resources');

INSERT INTO role ( title, salary, department_id ) VALUES
   ('Accountant', 99000, 1),
   ('Helpdesk Technician', 10000, 2);

INSERT INTO employee ( first_name, last_name, role_id, manager_id ) VALUES
   ('Mark', 'Johnson', 1, NULL),
   ('Alice', 'White', 2, NULL);
