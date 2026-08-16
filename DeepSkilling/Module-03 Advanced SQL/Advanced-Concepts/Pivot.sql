SELECT *
FROM
(
SELECT Department,Salary
FROM Employees
) AS SourceTable

PIVOT
(
SUM(Salary)
FOR Department IN
(
HR,
IT,
Sales
)
) AS PivotTable;