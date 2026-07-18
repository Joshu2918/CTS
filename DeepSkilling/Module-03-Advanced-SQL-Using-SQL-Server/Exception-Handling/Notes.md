# Exception Handling in SQL Server

## TRY...CATCH

SQL Server provides TRY...CATCH blocks to handle runtime errors.

### Syntax

BEGIN TRY
    -- SQL Statements
END TRY

BEGIN CATCH
    -- Error Handling Statements
END CATCH

### Error Functions

- ERROR_NUMBER()
- ERROR_MESSAGE()
- ERROR_LINE()
- ERROR_SEVERITY()
- ERROR_STATE()

## Advantages

- Prevents abrupt program termination
- Makes debugging easier
- Improves application reliability
