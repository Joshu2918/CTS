-- Basic SELECT, filtering, sorting, and data modification examples.
-- Run Mini_Project/EmployeeManagement.sql first.

SELECT *
FROM Employees;

SELECT emp_id, emp_name, department, salary
FROM Employees
WHERE salary > 50000
ORDER BY salary DESC;

INSERT INTO Employees (emp_id, emp_name, department, salary)
VALUES (104, 'Sneha', 'Finance', 48000);

UPDATE Employees
SET salary = 52000
WHERE emp_id = 104;

DELETE FROM Employees
WHERE emp_id = 104;
