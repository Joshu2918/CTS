interface Coffee {

    String getDescription();
}

class BasicCoffee implements Coffee {

    @Override
    public String getDescription() {
        return "Plain Coffee";
    }
}

class MilkDecorator implements Coffee {

    private Coffee coffee;

    public MilkDecorator(Coffee coffee) {
        this.coffee = coffee;
    }

    @Override
    public String getDescription() {
        return coffee.getDescription() +
               " + Milk";
    }
}

public class DecoratorDemo {

    public static void main(String[] args) {

        Coffee coffee =
                new MilkDecorator(
                        new BasicCoffee());

        System.out.println(
                coffee.getDescription());
    }
}