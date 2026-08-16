CREATE FUNCTION dbo.CalculateBonus
(
    @Salary DECIMAL(10,2)
)
RETURNS DECIMAL(10,2)
AS
BEGIN
    RETURN @Salary * 0.10;
END;
GO

SELECT
EmployeeName,
dbo.CalculateBonus(Salary) AS Bonus
FROM Employees;