using System;

class FinancialForecast
{
    static double Forecast(double amount, double rate, int years)
    {
        if (years == 0)
            return amount;

        return Forecast(amount * (1 + rate), rate, years - 1);
    }

    static void Main()
    {
        double principal = 10000;
        double growthRate = 0.10;
        int years = 5;

        double futureValue = Forecast(principal, growthRate, years);

        Console.WriteLine("Future Value: ₹" + futureValue.ToString("F2"));
    }
}
