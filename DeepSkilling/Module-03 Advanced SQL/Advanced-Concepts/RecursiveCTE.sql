WITH EmployeeHierarchy AS
(
SELECT
EmployeeID,
ManagerID,
EmployeeName
FROM Employees
WHERE ManagerID IS NULL

UNION ALL

SELECT
e.EmployeeID,
e.ManagerID,
e.EmployeeName
FROM Employees e
INNER JOIN EmployeeHierarchy h
ON e.ManagerID = h.EmployeeID
)

SELECT *
FROM EmployeeHierarchy;