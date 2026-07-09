interface Payment {
    void pay();
}

class UpiPayment implements Payment {
    @Override
    public void pay() {
        System.out.println("UPI Payment Processed");
    }
}

class CardPayment implements Payment {
    @Override
    public void pay() {
        System.out.println("Card Payment Processed");
    }
}

class PaymentFactory {
    static Payment create(String type) {
        if ("UPI".equalsIgnoreCase(type)) {
            return new UpiPayment();
        }

        if ("CARD".equalsIgnoreCase(type)) {
            return new CardPayment();
        }

        throw new IllegalArgumentException("Unsupported payment type: " + type);
    }
}

class FactoryDemo {
    public static void main(String[] args) {
        Payment payment = PaymentFactory.create("UPI");
        payment.pay();
    }
}
