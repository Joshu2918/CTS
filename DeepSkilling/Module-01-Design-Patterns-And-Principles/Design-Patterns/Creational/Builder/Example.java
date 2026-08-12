class Laptop {
    private final String processor;
    private final int ram;
    private final int storage;

    private Laptop(Builder builder) {
        this.processor = builder.processor;
        this.ram = builder.ram;
        this.storage = builder.storage;
    }

    static class Builder {
        private String processor;
        private int ram;
        private int storage;

        Builder setProcessor(String processor) {
            this.processor = processor;
            return this;
        }

        Builder setRam(int ram) {
            this.ram = ram;
            return this;
        }

        Builder setStorage(int storage) {
            this.storage = storage;
            return this;
        }

        Laptop build() {
            if (processor == null || processor.isBlank()) {
                throw new IllegalStateException("Processor is required");
            }

            if (ram <= 0 || storage <= 0) {
                throw new IllegalStateException("RAM and storage must be positive");
            }

            return new Laptop(this);
        }
    }

    void display() {
        System.out.println(processor + " | " + ram + " GB RAM | " + storage + " GB Storage");
    }
}

class BuilderDemo {
    public static void main(String[] args) {
        Laptop laptop = new Laptop.Builder()
                .setProcessor("Intel i7")
                .setRam(16)
                .setStorage(512)
                .build();

        laptop.display();
    }
}
