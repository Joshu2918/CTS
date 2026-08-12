CREATE TABLE Employees
(
    EmployeeID INT PRIMARY KEY,
    EmployeeName VARCHAR(50),
    Department VARCHAR(30),
    Salary INT
);

INSERT INTO Employees VALUES
(1,'Joshit','Development',65000),
(2,'Rahul','Development',50000),
(3,'Anjali','Testing',45000),
(4,'Kiran','Testing',47000),
(5,'Arjun','HR',35000);

WITH EmployeeCTE AS
(
    SELECT EmployeeName,
           Department,
           Salary
    FROM Employees
    WHERE Salary > 45000
)
SELECT *
FROM EmployeeCTE;
