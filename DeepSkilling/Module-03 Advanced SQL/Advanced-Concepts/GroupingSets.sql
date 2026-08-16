SELECT
Department,
JobRole,
SUM(Salary)
FROM Employees
GROUP BY GROUPING SETS
(
(Department),
(JobRole),
(Department,JobRole)
);