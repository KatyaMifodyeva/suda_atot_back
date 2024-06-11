import { OneToMany, Entity, PrimaryColumn, ManyToOne } from 'typeorm';
import { Course } from './course.entity';
import { Group } from './group.entity';
import { Attendance } from './attendance.entity';
import { WorkingOff } from './working_off.entity';

@Entity('teachers') //пример сущности
export class Teacher {
  @PrimaryColumn({ type: 'bigint' })
  id: string;

  @OneToMany(() => Group, (groups) => groups.teachers)
  groups: Group[];

  @OneToMany(() => Attendance, (attendance) => attendance.teacher)
  attendence: Attendance[];

  @OneToMany(() => WorkingOff, (working_off) => working_off.teacher)
  working_off: WorkingOff[];
}
