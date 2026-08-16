interface Internet {

    void connect(String website);
}

class RealInternet implements Internet {

    @Override
    public void connect(String website) {

        System.out.println(
                "Connecting to " + website);
    }
}

class InternetProxy implements Internet {

    private RealInternet internet =
            new RealInternet();

    @Override
    public void connect(String website) {

        if(website.equals("blocked.com")) {

            System.out.println(
                    "Access Denied");
            return;
        }

        internet.connect(website);
    }
}

public class ProxyDemo {

    public static void main(String[] args) {

        Internet internet =
                new InternetProxy();

        internet.connect("google.com");

        internet.connect("blocked.com");
    }
}