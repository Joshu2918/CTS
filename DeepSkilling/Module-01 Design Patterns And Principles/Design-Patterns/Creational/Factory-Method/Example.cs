interface Payment {

    void pay();
}

class UpiPayment implements Payment {

    public void pay() {
        System.out.println("UPI Payment Processed");
    }
}

class CardPayment implements Payment {

    public void pay() {
        System.out.println("Card Payment Processed");
    }
}

class PaymentFactory {

    public static Payment create(String type) {

        if(type.equals("UPI"))
            return new UpiPayment();

        return new CardPayment();
    }
}

public class FactoryDemo {

    public static void main(String[] args) {

        Payment payment =
                PaymentFactory.create("UPI");

        payment.pay();
    }
}