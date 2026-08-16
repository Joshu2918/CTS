DROP TABLE IF EXISTS Employees;

CREATE TABLE Employees
(
    EmployeeID INT,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DepartmentID INT,
    Salary DECIMAL(10,2),
    JoinDate DATE
);

INSERT INTO Employees
VALUES
(
    1,
    'Pramod',
    'Munaganuri',
    3,
    6500,
    '2026-06-18'
);

SELECT *
FROM Employees;