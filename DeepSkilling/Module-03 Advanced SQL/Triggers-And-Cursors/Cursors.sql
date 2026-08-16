DECLARE EmployeeCursor CURSOR
FOR
SELECT EmployeeName
FROM Employees;

OPEN EmployeeCursor;

DECLARE @EmployeeName VARCHAR(100);

FETCH NEXT FROM EmployeeCursor
INTO @EmployeeName;

WHILE @@FETCH_STATUS = 0
BEGIN
    PRINT @EmployeeName;

    FETCH NEXT FROM EmployeeCursor
    INTO @EmployeeName;
END

CLOSE EmployeeCursor;

DEALLOCATE EmployeeCursor;