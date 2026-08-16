MERGE TargetEmployee AS T
USING SourceEmployee AS S
ON T.EmployeeID = S.EmployeeID

WHEN MATCHED THEN
UPDATE SET
T.Salary = S.Salary

WHEN NOT MATCHED THEN
INSERT
(
EmployeeID,
EmployeeName,
Salary
)
VALUES
(
S.EmployeeID,
S.EmployeeName,
S.Salary
);