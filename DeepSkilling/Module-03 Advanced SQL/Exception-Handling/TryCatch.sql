BEGIN TRY

    DECLARE @Result INT;

    SET @Result = 10 / 0;

END TRY

BEGIN CATCH

    SELECT
    ERROR_NUMBER() AS ErrorNumber,
    ERROR_MESSAGE() AS ErrorMessage;

END CATCH;