import { ManyToOne, Entity, PrimaryColumn, OneToMany } from 'typeorm';
import { Expenses } from './expenses.entity';
import { Schedule } from './shedule.entity';
import { Student } from './student.entity';
import { Teacher } from './teacher.entity';
import { Attendance } from './attendance.entity';
import { DaysOfWeekNSI } from './days_of_week_nsi.entity';
import { ClassTimeNsi } from './class_time_nsi.entity';

@Entity('working_off')
export class WorkingOff {
  @PrimaryColumn({ type: 'bigint' })
  id: string;

  @ManyToOne(() => Attendance, (attendance) => attendance.working_off)
  attendance: Attendance;

  @ManyToOne(() => DaysOfWeekNSI, (days_of_week) => days_of_week.working_off)
  days_of_week: DaysOfWeekNSI;

  @ManyToOne(() => ClassTimeNsi, (class_time) => class_time.working_off)
  class_time: DaysOfWeekNSI;

  @ManyToOne(() => Teacher, (teacher) => teacher.working_off)
  teacher: Teacher;
}
