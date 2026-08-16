interface PaymentMethod {

    void pay(double amount);
}

class CreditCardPayment implements PaymentMethod {

    @Override
    public void pay(double amount) {

        System.out.println(
                "Paid ₹" + amount +
                " using Credit Card");
    }
}

class UpiPayment implements PaymentMethod {

    @Override
    public void pay(double amount) {

        System.out.println(
                "Paid ₹" + amount +
                " using UPI");
    }
}

class PaymentProcessor {

    public void processPayment(
            PaymentMethod paymentMethod,
            double amount) {

        paymentMethod.pay(amount);
    }
}

public class LSPDemo {

    public static void main(String[] args) {

        PaymentProcessor processor =
                new PaymentProcessor();

        processor.processPayment(
                new CreditCardPayment(),
                1500);

        processor.processPayment(
                new UpiPayment(),
                2500);
    }
}