WITH EmployeeCTE AS
(
SELECT
EmployeeID,
EmployeeName,
Salary
FROM Employees
)
SELECT *
FROM EmployeeCTE;