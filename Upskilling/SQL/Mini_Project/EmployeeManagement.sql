-- Employee Management Database

CREATE DATABASE IF NOT EXISTS EmployeeManagement;
USE EmployeeManagement;

CREATE TABLE IF NOT EXISTS Departments (
    department_name VARCHAR(30) PRIMARY KEY,
    location VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS Employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50) NOT NULL,
    department VARCHAR(30) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL CHECK (salary >= 0),
    CONSTRAINT fk_employee_department
        FOREIGN KEY (department)
        REFERENCES Departments(department_name)
);

INSERT INTO Departments (department_name, location)
VALUES
    ('IT', 'Bengaluru'),
    ('HR', 'Hyderabad'),
    ('Finance', 'Chennai')
ON DUPLICATE KEY UPDATE
    location = VALUES(location);

INSERT INTO Employees (emp_id, emp_name, department, salary)
VALUES
    (101, 'Pramod', 'IT', 60000),
    (102, 'Rahul', 'HR', 45000),
    (103, 'Anil', 'IT', 70000)
ON DUPLICATE KEY UPDATE
    emp_name = VALUES(emp_name),
    department = VALUES(department),
    salary = VALUES(salary);

SELECT *
FROM Employees
ORDER BY emp_id;

SELECT *
FROM Employees
WHERE salary > 50000
ORDER BY salary DESC;

UPDATE Employees
SET salary = 65000
WHERE emp_id = 101;

-- Example delete operation. It affects no seeded row unless employee 999 exists.
DELETE FROM Employees
WHERE emp_id = 999;

SELECT
    department,
    COUNT(*) AS employee_count,
    ROUND(AVG(salary), 2) AS average_salary
FROM Employees
GROUP BY department
ORDER BY department;
