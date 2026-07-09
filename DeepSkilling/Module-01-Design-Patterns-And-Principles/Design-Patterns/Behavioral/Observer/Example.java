import java.util.ArrayList;
import java.util.List;

interface Subscriber {
    void update(String videoTitle);
}

class User implements Subscriber {
    private final String name;

    User(String name) {
        this.name = name;
    }

    @Override
    public void update(String videoTitle) {
        System.out.println(name + " received notification: " + videoTitle);
    }
}

class Channel {
    private final List<Subscriber> subscribers = new ArrayList<>();

    void subscribe(Subscriber subscriber) {
        subscribers.add(subscriber);
    }

    void unsubscribe(Subscriber subscriber) {
        subscribers.remove(subscriber);
    }

    void uploadVideo(String title) {
        System.out.println("Uploaded: " + title);

        for (Subscriber subscriber : subscribers) {
            subscriber.update(title);
        }
    }
}

class ObserverDemo {
    public static void main(String[] args) {
        Channel channel = new Channel();

        channel.subscribe(new User("Pramod"));
        channel.subscribe(new User("Rahul"));

        channel.uploadVideo("Design Patterns Tutorial");
    }
}
