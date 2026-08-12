-- Subquery examples.
-- Run Mini_Project/EmployeeManagement.sql first.

SELECT emp_id, emp_name, department, salary
FROM Employees
WHERE salary > (
    SELECT AVG(salary)
    FROM Employees
);

SELECT emp_id, emp_name, department
FROM Employees
WHERE department IN (
    SELECT department
    FROM Employees
    GROUP BY department
    HAVING COUNT(*) >= 2
);

SELECT emp_name, salary
FROM Employees
WHERE salary = (
    SELECT MAX(salary)
    FROM Employees
);
