CREATE TABLE Products
(
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(50),
    Category VARCHAR(50),
    Price DECIMAL(10,2)
);

INSERT INTO Products
VALUES
(1,'Laptop','Electronics',65000),
(2,'Mouse','Electronics',800),
(3,'Keyboard','Electronics',1500),
(4,'Chair','Furniture',3500),
(5,'Table','Furniture',7000),
(6,'Sofa','Furniture',25000);

SELECT
ProductID,
ProductName,
Category,
Price,
RANK() OVER(PARTITION BY Category ORDER BY Price DESC) AS PriceRank
FROM Products;
