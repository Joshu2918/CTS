interface PaymentStrategy {
    void pay(int amount);
}

class UpiPayment implements PaymentStrategy {
    @Override
    public void pay(int amount) {
        System.out.println("Paid ₹" + amount + " using UPI");
    }
}

class CardPayment implements PaymentStrategy {
    @Override
    public void pay(int amount) {
        System.out.println("Paid ₹" + amount + " using Card");
    }
}

class PaymentProcessor {
    private PaymentStrategy strategy;

    PaymentProcessor(PaymentStrategy strategy) {
        this.strategy = strategy;
    }

    void setStrategy(PaymentStrategy strategy) {
        this.strategy = strategy;
    }

    void process(int amount) {
        strategy.pay(amount);
    }
}

class StrategyDemo {
    public static void main(String[] args) {
        PaymentProcessor processor = new PaymentProcessor(new UpiPayment());
        processor.process(2500);

        processor.setStrategy(new CardPayment());
        processor.process(1200);
    }
}
