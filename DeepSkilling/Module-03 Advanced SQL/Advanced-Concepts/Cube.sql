SELECT
Department,
JobRole,
SUM(Salary)
FROM Employees
GROUP BY CUBE
(
Department,
JobRole
);