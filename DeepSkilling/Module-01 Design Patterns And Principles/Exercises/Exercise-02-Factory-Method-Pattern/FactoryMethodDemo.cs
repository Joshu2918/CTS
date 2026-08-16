interface Notification {

    void send();
}

class EmailNotification
        implements Notification {

    public void send() {

        System.out.println(
                "Email Notification Sent");
    }
}

class SmsNotification
        implements Notification {

    public void send() {

        System.out.println(
                "SMS Notification Sent");
    }
}

class NotificationFactory {

    public static Notification create(
            String type) {

        if(type.equals("EMAIL"))
            return new EmailNotification();

        return new SmsNotification();
    }
}

public class FactoryMethodDemo {

    public static void main(String[] args) {

        Notification notification =
                NotificationFactory
                        .create("EMAIL");

        notification.send();
    }
}