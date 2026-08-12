CREATE TABLE Customers
(
    CustomerID INT PRIMARY KEY,
    CustomerName VARCHAR(100),
    City VARCHAR(50),
    Email VARCHAR(100)
);

INSERT INTO Customers
VALUES
(1,'Kondragunta Joshit','Hyderabad','joshit@gmail.com'),
(2,'Rahul Sharma','Chennai','rahul@gmail.com'),
(3,'Anjali Reddy','Bangalore','anjali@gmail.com'),
(4,'Arjun Kumar','Hyderabad','arjun@gmail.com');

CREATE INDEX IX_Customers_City
ON Customers(City);

SELECT *
FROM Customers
WHERE City='Hyderabad';
