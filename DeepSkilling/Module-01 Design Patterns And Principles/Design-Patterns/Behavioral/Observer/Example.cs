import java.util.ArrayList;
import java.util.List;

interface Subscriber {

    void update(String videoTitle);
}

class User implements Subscriber {

    private String name;

    public User(String name) {
        this.name = name;
    }

    @Override
    public void update(String videoTitle) {

        System.out.println(
                name +
                " received notification: " +
                videoTitle);
    }
}

class Channel {

    private List<Subscriber> subscribers =
            new ArrayList<>();

    public void subscribe(
            Subscriber subscriber) {

        subscribers.add(subscriber);
    }

    public void uploadVideo(
            String title) {

        for(Subscriber subscriber :
                subscribers) {

            subscriber.update(title);
        }
    }
}

public class ObserverDemo {

    public static void main(String[] args) {

        Channel channel =
                new Channel();

        channel.subscribe(
                new User("Pramod"));

        channel.subscribe(
                new User("Rahul"));

        channel.uploadVideo(
                "Design Patterns Tutorial");
    }
}