# Output

| ProductName | Category | Price | RowNumber | Rank | DenseRank |
|-------------|----------|--------|------------|------|-----------|
| Laptop | Electronics | 75000 | 1 | 1 | 1 |
| Mobile | Electronics | 60000 | 2 | 2 | 2 |
| Tablet | Electronics | 60000 | 3 | 2 | 2 |
| Monitor | Electronics | 25000 | 4 | 4 | 3 |
| Sofa | Furniture | 50000 | 1 | 1 | 1 |
| Dining Table | Furniture | 45000 | 2 | 2 | 2 |
| Cupboard | Furniture | 45000 | 3 | 2 | 2 |
| Chair | Furniture | 15000 | 4 | 4 | 3 |

## Observation

ROW_NUMBER assigns unique sequential values.

RANK assigns the same rank for tied values and skips the next rank.

DENSE_RANK assigns the same rank for tied values without skipping ranks.

PARTITION BY performs ranking separately for each category.
![alt text](Exercise01_Output.png)