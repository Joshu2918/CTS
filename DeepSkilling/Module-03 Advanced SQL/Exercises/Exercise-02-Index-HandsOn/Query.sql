CREATE TABLE Employees
(
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Salary DECIMAL(10,2)
);

INSERT INTO Employees
VALUES
(1,'John','Smith',4000),
(2,'Jane','Wilson',6500),
(3,'David','Miller',7200),
(4,'Sara','Brown',5500);

CREATE INDEX IX_EmployeeSalary
ON Employees(Salary);

SELECT *
FROM Employees
WHERE Salary > 5000;