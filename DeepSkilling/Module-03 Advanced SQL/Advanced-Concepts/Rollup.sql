SELECT
Department,
SUM(Salary)
FROM Employees
GROUP BY ROLLUP(Department);