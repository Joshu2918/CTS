interface Discount {

    double getDiscount(double amount);
}

class StudentDiscount implements Discount {

    @Override
    public double getDiscount(double amount) {
        return amount * 0.10;
    }
}

class EmployeeDiscount implements Discount {

    @Override
    public double getDiscount(double amount) {
        return amount * 0.15;
    }
}

class BillingService {

    public void printFinalAmount(
            double amount,
            Discount discount) {

        double discountValue =
                discount.getDiscount(amount);

        double finalAmount =
                amount - discountValue;

        System.out.println(
                "Final Amount : " + finalAmount);
    }
}

public class OCPDemo {

    public static void main(String[] args) {

        BillingService service =
                new BillingService();

        service.printFinalAmount(
                5000,
                new StudentDiscount());

        service.printFinalAmount(
                5000,
                new EmployeeDiscount());
    }
}