SELECT Department,Amount
FROM DepartmentSalary

UNPIVOT
(
Amount FOR Department IN
(
HR,
IT,
Sales
)
) AS UnpivotTable;