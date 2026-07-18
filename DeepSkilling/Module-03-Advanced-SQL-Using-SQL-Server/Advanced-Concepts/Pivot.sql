CREATE TABLE Sales
(
    Region VARCHAR(20),
    Product VARCHAR(20),
    Amount INT
);

INSERT INTO Sales
VALUES
('North','Laptop',50000),
('North','Mobile',30000),
('South','Laptop',45000),
('South','Mobile',25000);

SELECT *
FROM
(
    SELECT Region, Product, Amount
    FROM Sales
) AS SourceTable
PIVOT
(
    SUM(Amount)
    FOR Product IN ([Laptop],[Mobile])
) AS PivotTable;
