class ConfigurationManager {

    private static ConfigurationManager instance;

    private ConfigurationManager() {}

    public static ConfigurationManager getInstance() {

        if(instance == null) {
            instance = new ConfigurationManager();
        }

        return instance;
    }

    public void display() {
        System.out.println("Configuration Loaded");
    }
}

public class SingletonDemo {

    public static void main(String[] args) {

        ConfigurationManager config1 =
                ConfigurationManager.getInstance();

        ConfigurationManager config2 =
                ConfigurationManager.getInstance();

        System.out.println(config1 == config2);

        config1.display();
    }
}