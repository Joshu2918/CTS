using System;

class FinancialForecast
{
    static double Forecast(
        double amount,
        double growthRate,
        int years)
    {
        if(years == 0)
            return amount;

        return Forecast(
            amount * (1 + growthRate),
            growthRate,
            years - 1);
    }

    static void Main()
    {
        double investment = 10000;

        double growthRate = 0.10;

        int years = 5;

        double futureValue =
            Forecast(
                investment,
                growthRate,
                years);

        Console.WriteLine(
            "Future Value: ₹" +
            futureValue.ToString("F2"));
    }
}