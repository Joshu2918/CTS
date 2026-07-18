CREATE TABLE Employees
(
    EmployeeName VARCHAR(50),
    Salary INT
);

INSERT INTO Employees
VALUES
('Joshit',65000),
('Rahul',50000),
('Anjali',45000);

SELECT
    EmployeeName,
    Salary,
    AVG(Salary) OVER() AS AverageSalary,
    SUM(Salary) OVER() AS TotalSalary
FROM Employees;
