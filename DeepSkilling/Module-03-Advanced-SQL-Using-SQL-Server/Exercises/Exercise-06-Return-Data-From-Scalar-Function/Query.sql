CREATE OR ALTER FUNCTION fn_GetAnnualSalary
(
    @Salary DECIMAL(10,2)
)
RETURNS DECIMAL(10,2)
AS
BEGIN
    RETURN @Salary * 12;
END;
GO

SELECT
    EmployeeID,
    FirstName,
    LastName,
    Salary,
    dbo.fn_GetAnnualSalary(Salary) AS AnnualSalary
FROM Employees;
