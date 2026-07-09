class LegacyPrinter {
    void printDocument() {
        System.out.println("Printing from Legacy Printer");
    }
}

interface Printer {
    void print();
}

class PrinterAdapter implements Printer {
    private final LegacyPrinter legacyPrinter;

    PrinterAdapter(LegacyPrinter legacyPrinter) {
        this.legacyPrinter = legacyPrinter;
    }

    @Override
    public void print() {
        legacyPrinter.printDocument();
    }
}

class AdapterDemo {
    public static void main(String[] args) {
        Printer printer = new PrinterAdapter(new LegacyPrinter());
        printer.print();
    }
}
