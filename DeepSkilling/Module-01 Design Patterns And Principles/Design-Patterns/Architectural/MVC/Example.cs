class Student {

    private String name;

    public Student(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}

class StudentView {

    public void displayStudent(
            String name) {

        System.out.println(
                "Student Name: " + name);
    }
}

class StudentController {

    private Student model;
    private StudentView view;

    public StudentController(
            Student model,
            StudentView view) {

        this.model = model;
        this.view = view;
    }

    public void updateView() {

        view.displayStudent(
                model.getName());
    }
}

public class MVCDemo {

    public static void main(String[] args) {

        Student model =
                new Student("Pramod");

        StudentView view =
                new StudentView();

        StudentController controller =
                new StudentController(
                        model,
                        view);

        controller.updateView();
    }
}