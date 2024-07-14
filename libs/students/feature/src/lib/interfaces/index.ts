export interface Student {
  id: string;
  name: string;
  surname: string;
  notes: string;
  dateAdded: Date;
  dateLastAttended: Date;
}

export interface ClassAttendanceInfo {
  studentId: string;
  classesAttended: number;
  classesAvailable: number;
}

export type StudentWithAttendanceInfo = Student &
  Omit<ClassAttendanceInfo, 'studentId'>;
