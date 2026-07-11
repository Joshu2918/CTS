CREATE PROCEDURE sp_InsertEmployee
(
    @FirstName VARCHAR(50),
    @LastName VARCHAR(50),
    @Department VARCHAR(50),
    @Salary DECIMAL(10,2),
    @JoinDate DATE
)
AS
BEGIN
    INSERT INTO Employees
    (
        FirstName,
        LastName,
        Department,
        Salary,
        JoinDate
    )
    VALUES
    (
        @FirstName,
        @LastName,
        @Department,
        @Salary,
        @JoinDate
    );
END;
GO

EXEC sp_InsertEmployee
'Kondragunta Joshit',
'Simha',
'Software Development',
65000,
'2026-07-01';

SELECT *
FROM Employees;
