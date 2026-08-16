class LegacyPrinter {

    public void printDocument() {
        System.out.println("Printing from Legacy Printer");
    }
}

interface Printer {

    void print();
}

class PrinterAdapter implements Printer {

    private LegacyPrinter printer;

    public PrinterAdapter(LegacyPrinter printer) {
        this.printer = printer;
    }

    @Override
    public void print() {
        printer.printDocument();
    }
}

public class AdapterDemo {

    public static void main(String[] args) {

        Printer printer =
                new PrinterAdapter(
                        new LegacyPrinter());

        printer.print();
    }
}