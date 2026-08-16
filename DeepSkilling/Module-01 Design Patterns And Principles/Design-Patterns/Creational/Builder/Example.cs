class Laptop {

    private String processor;
    private int ram;
    private int storage;

    private Laptop(Builder builder) {

        this.processor = builder.processor;
        this.ram = builder.ram;
        this.storage = builder.storage;
    }

    static class Builder {

        private String processor;
        private int ram;
        private int storage;

        public Builder setProcessor(String processor) {
            this.processor = processor;
            return this;
        }

        public Builder setRam(int ram) {
            this.ram = ram;
            return this;
        }

        public Builder setStorage(int storage) {
            this.storage = storage;
            return this;
        }

        public Laptop build() {
            return new Laptop(this);
        }
    }

    public void display() {

        System.out.println(
                processor + " " +
                ram + "GB " +
                storage + "GB");
    }
}

public class BuilderDemo {

    public static void main(String[] args) {

        Laptop laptop =
                new Laptop.Builder()
                        .setProcessor("Intel i7")
                        .setRam(16)
                        .setStorage(512)
                        .build();

        laptop.display();
    }
}