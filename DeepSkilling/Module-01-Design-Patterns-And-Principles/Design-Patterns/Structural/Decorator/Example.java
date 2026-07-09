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
    private final Coffee coffee;

    MilkDecorator(Coffee coffee) {
        this.coffee = coffee;
    }

    @Override
    public String getDescription() {
        return coffee.getDescription() + " + Milk";
    }
}

class SugarDecorator implements Coffee {
    private final Coffee coffee;

    SugarDecorator(Coffee coffee) {
        this.coffee = coffee;
    }

    @Override
    public String getDescription() {
        return coffee.getDescription() + " + Sugar";
    }
}

class DecoratorDemo {
    public static void main(String[] args) {
        Coffee coffee = new SugarDecorator(
                new MilkDecorator(
                        new BasicCoffee()));

        System.out.println(coffee.getDescription());
    }
}
