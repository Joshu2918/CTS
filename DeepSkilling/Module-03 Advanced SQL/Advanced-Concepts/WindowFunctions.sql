SELECT
EmployeeID,
EmployeeName,
Salary,

ROW_NUMBER() OVER(
ORDER BY Salary DESC
) AS RowNum,

RANK() OVER(
ORDER BY Salary DESC
) AS RankNum,

DENSE_RANK() OVER(
ORDER BY Salary DESC
) AS DenseRankNum

FROM Employees;