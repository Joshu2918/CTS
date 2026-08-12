# SQL Notes

## DDL

Data Definition Language changes database structures:

- `CREATE`
- `ALTER`
- `DROP`

## DML

Data Manipulation Language changes table data:

- `INSERT`
- `UPDATE`
- `DELETE`

## DQL

Data Query Language retrieves data using `SELECT`.

## Filtering

`WHERE` filters rows before grouping.

## Sorting

`ORDER BY` sorts the result in ascending (`ASC`) or descending (`DESC`) order.

## Grouping

`GROUP BY` combines rows with matching values. `HAVING` filters grouped results.

## Relationships

- `INNER JOIN` returns matching rows from both tables.
- `LEFT JOIN` keeps every row from the left table.
- `RIGHT JOIN` keeps every row from the right table.

## Nested Queries

A subquery is a query placed inside another SQL statement. It can return a single value, one column, or a result set.

## Good Practices

- Use primary and foreign keys to protect data integrity.
- List column names explicitly in `INSERT` statements.
- Include a targeted `WHERE` clause in `UPDATE` and `DELETE`.
- Test data-changing statements inside a transaction when possible.
