CREATE TABLE SalesReport
(
    Region VARCHAR(20),
    Laptop INT,
    Mobile INT
);

INSERT INTO SalesReport
VALUES
('North',50000,30000),
('South',45000,25000);

SELECT
    Region,
    Product,
    Amount
FROM SalesReport
UNPIVOT
(
    Amount
    FOR Product IN (Laptop, Mobile)
) AS UnpivotTable;
