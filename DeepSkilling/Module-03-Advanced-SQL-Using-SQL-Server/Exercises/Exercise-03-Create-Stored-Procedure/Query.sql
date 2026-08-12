DROP TABLE IF EXISTS Employees;

CREATE TABLE Employees
(
    EmployeeID INT IDENTITY(1,1) PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Department VARCHAR(50),
    Salary DECIMAL(10,2),
    JoinDate DATE
);

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
    'Kondragunta Joshit',
    'Simha',
    'Software Development',
    65000,
    '2026-07-01'
);

CREATE PROCEDURE sp_GetEmployees
AS
BEGIN
    SELECT *
    FROM Employees;
END;
GO

EXEC sp_GetEmployees;
