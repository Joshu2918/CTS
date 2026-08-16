SELECT
EmployeeID,
Department,
Salary,

ROW_NUMBER() OVER(
PARTITION BY Department
ORDER BY Salary DESC
) AS RowNumber

FROM Employees;