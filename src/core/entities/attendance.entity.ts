import { ManyToOne, Entity, PrimaryColumn, OneToMany } from 'typeorm';
import { Expenses } from './expenses.entity';
import { Schedule } from './shedule.entity';
import { Student } from './student.entity';
import { Teacher } from './teacher.entity';
import { AttendanceNsi } from './attendance_nsi.entity';
import { WorkingOff } from './working_off.entity';

@Entity('attendance')
export class Attendance {
  @PrimaryColumn({ type: 'bigint' })
  id: string;

  @OneToMany(() => Expenses, (expenses) => expenses.expenses_nsi)
  expenses: Expenses[];

  @ManyToOne(() => Schedule, (schedule) => schedule.attendance)
  schedule: Schedule;

  @ManyToOne(() => Student, (student) => student.attendence)
  student: Student;

  @ManyToOne(() => Teacher, (teacher) => teacher.attendence)
  teacher: Teacher;

  @ManyToOne(() => AttendanceNsi, (attendance_nsi) => attendance_nsi.attendance)
  attendance_nsi: AttendanceNsi;

  @OneToMany(() => WorkingOff, (workingOff) => workingOff.attendance)
  working_off: WorkingOff[];
}
