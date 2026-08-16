CREATE PROCEDURE sp_GetEmployeesByDepartment
    @DepartmentID INT
AS
BEGIN

    SELECT
        EmployeeID,
        FirstName,
        LastName,
        DepartmentID,
        Salary
    FROM Employees
    WHERE DepartmentID = @DepartmentID;

END;
GO

EXEC sp_GetEmployeesByDepartment 3;