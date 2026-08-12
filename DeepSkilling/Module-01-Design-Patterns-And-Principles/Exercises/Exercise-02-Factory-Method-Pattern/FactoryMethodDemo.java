interface Notification {
    void send();
}

class EmailNotification implements Notification {
    @Override
    public void send() {
        System.out.println("Email Notification Sent");
    }
}

class SmsNotification implements Notification {
    @Override
    public void send() {
        System.out.println("SMS Notification Sent");
    }
}

class NotificationFactory {
    static Notification create(String type) {
        if ("EMAIL".equalsIgnoreCase(type)) {
            return new EmailNotification();
        }

        if ("SMS".equalsIgnoreCase(type)) {
            return new SmsNotification();
        }

        throw new IllegalArgumentException("Unsupported notification type: " + type);
    }
}

public class FactoryMethodDemo {
    public static void main(String[] args) {
        Notification notification = NotificationFactory.create("EMAIL");
        notification.send();
    }
}
