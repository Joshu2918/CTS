SELECT
EmployeeID,
Salary,

AVG(Salary) OVER() AS AverageSalary

FROM Employees;