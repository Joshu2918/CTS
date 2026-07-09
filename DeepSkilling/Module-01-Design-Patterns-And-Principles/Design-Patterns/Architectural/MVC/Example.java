class Student {
    private final String name;

    Student(String name) {
        this.name = name;
    }

    String getName() {
        return name;
    }
}

class StudentView {
    void displayStudent(String name) {
        System.out.println("Student Name: " + name);
    }
}

class StudentController {
    private final Student model;
    private final StudentView view;

    StudentController(Student model, StudentView view) {
        this.model = model;
        this.view = view;
    }

    void updateView() {
        view.displayStudent(model.getName());
    }
}

class MVCDemo {
    public static void main(String[] args) {
        Student model = new Student("Pramod");
        StudentView view = new StudentView();
        StudentController controller = new StudentController(model, view);

        controller.updateView();
    }
}
