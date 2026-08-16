CREATE PROCEDURE GetEmployees
AS
BEGIN
    SELECT *
    FROM Employees;
END;
GO

EXEC GetEmployees;
GO

ALTER PROCEDURE GetEmployees
AS
BEGIN
    SELECT EmployeeID,
           EmployeeName
    FROM Employees;
END;
GO

DROP PROCEDURE GetEmployees;