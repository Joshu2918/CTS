CREATE OR ALTER PROCEDURE sp_GetEmployeeByDepartment
(
    @Department VARCHAR(50)
)
AS
BEGIN
    SELECT
        EmployeeID,
        FirstName,
        LastName,
        Department,
        Salary,
        JoinDate
    FROM Employees
    WHERE Department = @Department;
END;
GO

EXEC sp_GetEmployeeByDepartment
    'Software Development';
