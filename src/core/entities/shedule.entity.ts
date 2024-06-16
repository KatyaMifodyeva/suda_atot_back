import { ManyToOne, Entity, PrimaryColumn, OneToMany } from 'typeorm';
import { Group } from './group.entity';
import { Cabinet } from './cabinet.entity';
import { Attendance } from './attendance.entity';
import { DaysOfWeekNSI } from './days_of_week_nsi.entity';
import { ClassTimeNsi } from './class_time_nsi.entity';

@Entity('shedules')
export class Schedule {
  @PrimaryColumn({ type: 'bigint' })
  id: string;

  @ManyToOne(() => Cabinet, (cabinet) => cabinet.shedule)
  cabinet: Cabinet;

  @OneToMany(() => Attendance, (attendance) => attendance.schedule)
  attendance: Attendance[];

  @ManyToOne(() => DaysOfWeekNSI, (days_of_week) => days_of_week.schedule)
  days_of_week: DaysOfWeekNSI;

  @ManyToOne(() => ClassTimeNsi, (class_time) => class_time.schedule)
  class_time: DaysOfWeekNSI;

  @ManyToOne(() => Group, (group) => group)
  group: Group;
}
