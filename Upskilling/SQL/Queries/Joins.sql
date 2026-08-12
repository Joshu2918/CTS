-- JOIN examples using Employees and Departments.
-- Run Mini_Project/EmployeeManagement.sql first.

SELECT
    e.emp_id,
    e.emp_name,
    e.department,
    d.location
FROM Employees AS e
INNER JOIN Departments AS d
    ON e.department = d.department_name;

SELECT
    d.department_name,
    d.location,
    e.emp_name
FROM Departments AS d
LEFT JOIN Employees AS e
    ON d.department_name = e.department
ORDER BY d.department_name, e.emp_name;

SELECT
    d.department_name,
    e.emp_name
FROM Employees AS e
RIGHT JOIN Departments AS d
    ON e.department = d.department_name;
