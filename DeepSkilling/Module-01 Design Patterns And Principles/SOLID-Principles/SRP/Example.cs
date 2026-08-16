class Student {
    private String name;
    private int marks;

    public Student(String name, int marks) {
        this.name = name;
        this.marks = marks;
    }

    public int getMarks() {
        return marks;
    }

    public String getName() {
        return name;
    }
}

class GradeCalculator {

    public String calculateGrade(Student student) {

        int marks = student.getMarks();

        if (marks >= 90)
            return "A";

        if (marks >= 75)
            return "B";

        if (marks >= 60)
            return "C";

        return "D";
    }
}

public class SRPDemo {

    public static void main(String[] args) {

        Student student =
                new Student("Pramod", 88);

        GradeCalculator calculator =
                new GradeCalculator();

        System.out.println(
                "Student : " + student.getName());

        System.out.println(
                "Grade : " +
                calculator.calculateGrade(student));
    }
}