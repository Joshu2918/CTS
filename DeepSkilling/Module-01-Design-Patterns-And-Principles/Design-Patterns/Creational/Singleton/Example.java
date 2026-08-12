class ConfigurationManager {
    private ConfigurationManager() {
    }

    private static class InstanceHolder {
        private static final ConfigurationManager INSTANCE = new ConfigurationManager();
    }

    static ConfigurationManager getInstance() {
        return InstanceHolder.INSTANCE;
    }

    void display() {
        System.out.println("Configuration Loaded");
    }
}

class SingletonDemo {
    public static void main(String[] args) {
        ConfigurationManager config1 = ConfigurationManager.getInstance();
        ConfigurationManager config2 = ConfigurationManager.getInstance();

        System.out.println("Same instance: " + (config1 == config2));
        config1.display();
    }
}
