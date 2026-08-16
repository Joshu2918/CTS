IF OBJECT_ID('dbo.fn_CalculateAnnualSalary', 'FN') IS NOT NULL
    DROP FUNCTION dbo.fn_CalculateAnnualSalary;
GO

CREATE FUNCTION dbo.fn_CalculateAnnualSalary
(
    @MonthlySalary DECIMAL(10,2)
)
RETURNS DECIMAL(10,2)
AS
BEGIN

    RETURN @MonthlySalary * 12;

END;
GO

SELECT dbo.fn_CalculateAnnualSalary(5000) AS AnnualSalary;
GO