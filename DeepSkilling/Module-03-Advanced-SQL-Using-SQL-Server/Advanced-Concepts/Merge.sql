CREATE TABLE TargetEmployee
(
    EmployeeID INT PRIMARY KEY,
    EmployeeName VARCHAR(50)
);

CREATE TABLE SourceEmployee
(
    EmployeeID INT PRIMARY KEY,
    EmployeeName VARCHAR(50)
);

INSERT INTO TargetEmployee VALUES
(1,'Joshit'),
(2,'Rahul');

INSERT INTO SourceEmployee VALUES
(2,'Rahul Kumar'),
(3,'Anjali');

MERGE TargetEmployee AS T
USING SourceEmployee AS S
ON T.EmployeeID = S.EmployeeID

WHEN MATCHED THEN
UPDATE SET T.EmployeeName = S.EmployeeName

WHEN NOT MATCHED THEN
INSERT(EmployeeID, EmployeeName)
VALUES(S.EmployeeID,S.EmployeeName);

SELECT * FROM TargetEmployee;
