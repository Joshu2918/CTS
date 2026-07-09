class Student {
    private final String name;
    private final int marks;

    Student(String name, int marks) {
        this.name = name;
        this.marks = marks;
    }

    String getName() {
        return name;
    }

    int getMarks() {
        return marks;
    }
}

class GradeCalculator {
    String calculateGrade(Student student) {
        int marks = student.getMarks();

        if (marks >= 90) {
            return "A";
        }

        if (marks >= 75) {
            return "B";
        }

        if (marks >= 60) {
            return "C";
        }

        return "D";
    }
}

class StudentRepository {
    void save(Student student) {
        System.out.println("Saved student: " + student.getName());
    }
}

class SRPDemo {
    public static void main(String[] args) {
        Student student = new Student("Pramod", 88);
        GradeCalculator calculator = new GradeCalculator();
        StudentRepository repository = new StudentRepository();

        System.out.println("Student: " + student.getName());
        System.out.println("Grade: " + calculator.calculateGrade(student));
        repository.save(student);
    }
}
