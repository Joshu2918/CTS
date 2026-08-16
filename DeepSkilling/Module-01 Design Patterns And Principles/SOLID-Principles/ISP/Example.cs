interface ProjectWork {

    void workOnProject();
}

interface MeetingParticipant {

    void attendMeeting();
}

class Developer implements ProjectWork {

    @Override
    public void workOnProject() {

        System.out.println(
                "Developer is working on project");
    }
}

class TeamLead implements ProjectWork,
                             MeetingParticipant {

    @Override
    public void workOnProject() {

        System.out.println(
                "Team Lead is working on project");
    }

    @Override
    public void attendMeeting() {

        System.out.println(
                "Team Lead is attending meeting");
    }
}

public class ISPDemo {

    public static void main(String[] args) {

        Developer developer =
                new Developer();

        developer.workOnProject();

        TeamLead lead =
                new TeamLead();

        lead.workOnProject();
        lead.attendMeeting();
    }
}