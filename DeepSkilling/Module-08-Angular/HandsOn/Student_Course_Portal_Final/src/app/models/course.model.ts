export interface Course {
  id: number;
  name: string;
  code: string;
  credits: number;
  gradeStatus: 'passed' | 'failed' | 'pending';
  instructor: string;
  duration: string;
  level: string;
  date: string;
  fee: number;
  enrolled?: boolean;
}
