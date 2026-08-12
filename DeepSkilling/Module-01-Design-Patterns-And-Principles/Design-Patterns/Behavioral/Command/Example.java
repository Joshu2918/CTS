interface Command {
    void execute();
}

class Light {
    void turnOn() {
        System.out.println("Light Turned On");
    }
}

class LightOnCommand implements Command {
    private final Light light;

    LightOnCommand(Light light) {
        this.light = light;
    }

    @Override
    public void execute() {
        light.turnOn();
    }
}

class RemoteControl {
    private final Command command;

    RemoteControl(Command command) {
        this.command = command;
    }

    void pressButton() {
        command.execute();
    }
}

class CommandDemo {
    public static void main(String[] args) {
        Light light = new Light();
        Command command = new LightOnCommand(light);
        RemoteControl remote = new RemoteControl(command);

        remote.pressButton();
    }
}
