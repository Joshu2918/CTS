CREATE TABLE Sales
(
    Region VARCHAR(20),
    Product VARCHAR(20),
    SalesAmount INT
);

INSERT INTO Sales
VALUES
('North','Laptop',50000),
('North','Mobile',30000),
('South','Laptop',45000),
('South','Mobile',25000),
('East','Laptop',40000),
('East','Mobile',20000),
('West','Laptop',35000),
('West','Mobile',15000);

SELECT
    Region,
    Product,
    SUM(SalesAmount) AS TotalSales
FROM Sales
GROUP BY CUBE (Region, Product);
