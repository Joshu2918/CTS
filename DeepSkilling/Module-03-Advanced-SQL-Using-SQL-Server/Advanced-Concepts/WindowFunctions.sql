CREATE TABLE Employees
(
    EmployeeID INT,
    EmployeeName VARCHAR(50),
    Salary INT
);

INSERT INTO Employees
VALUES
(1,'Joshit',65000),
(2,'Rahul',50000),
(3,'Anjali',45000),
(4,'Kiran',47000);

SELECT
    EmployeeName,
    Salary,
    ROW_NUMBER() OVER(ORDER BY Salary DESC) AS RowNum,
    RANK() OVER(ORDER BY Salary DESC) AS RankNo,
    DENSE_RANK() OVER(ORDER BY Salary DESC) AS DenseRank
FROM Employees;
