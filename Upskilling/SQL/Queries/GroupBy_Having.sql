-- GROUP BY and HAVING examples.
-- Run Mini_Project/EmployeeManagement.sql first.

SELECT
    department,
    COUNT(*) AS employee_count,
    ROUND(AVG(salary), 2) AS average_salary,
    MAX(salary) AS highest_salary
FROM Employees
GROUP BY department
HAVING AVG(salary) >= 50000
ORDER BY average_salary DESC;
