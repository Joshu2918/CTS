interface NotificationService {
    void sendMessage(String message);
}

class EmailService implements NotificationService {
    @Override
    public void sendMessage(String message) {
        System.out.println("Email Sent: " + message);
    }
}

class SmsService implements NotificationService {
    @Override
    public void sendMessage(String message) {
        System.out.println("SMS Sent: " + message);
    }
}

class UserManager {
    private final NotificationService service;

    UserManager(NotificationService service) {
        this.service = service;
    }

    void notifyUser() {
        service.sendMessage("Account Created Successfully");
    }
}

class DIPDemo {
    public static void main(String[] args) {
        NotificationService service = new EmailService();
        UserManager manager = new UserManager(service);
        manager.notifyUser();
    }
}
