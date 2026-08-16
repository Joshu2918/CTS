interface Command {

    void execute();
}

class Light {

    public void turnOn() {

        System.out.println(
                "Light Turned On");
    }
}

class LightOnCommand
        implements Command {

    private Light light;

    public LightOnCommand(
            Light light) {

        this.light = light;
    }

    @Override
    public void execute() {

        light.turnOn();
    }
}

class RemoteControl {

    private Command command;

    public RemoteControl(
            Command command) {

        this.command = command;
    }

    public void pressButton() {

        command.execute();
    }
}

public class CommandDemo {

    public static void main(String[] args) {

        Light light =
                new Light();

        Command command =
                new LightOnCommand(
                        light);

        RemoteControl remote =
                new RemoteControl(
                        command);

        remote.pressButton();
    }
}