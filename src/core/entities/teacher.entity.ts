import { OneToMany, Entity, PrimaryColumn, Column } from 'typeorm';
import { Course } from './course.entity';
import { Group } from './group.entity';
import { Attendance } from './attendance.entity';
import { WorkingOff } from './working_off.entity';

@Entity('teachers') //пример сущности
export class Teacher {
  @PrimaryColumn({ type: 'bigint' })
  id: string;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  surname: string;

  @Column({ length: 255 })
  patronymic: string;

  @Column({ length: 255 })
  birth_date: string;

  @Column({ length: 255 })
  phone_number: string;

  @Column()
  expirience: number;

  @Column({ length: 255 })
  address: string;

  @Column({ length: 255 })
  skills: string;

  @Column({ length: 255 })
  salary_rate: string;

  @Column()
  user_id: string;

  @OneToMany(() => Group, (groups) => groups.teachers)
  groups: Group[];

  @OneToMany(() => Attendance, (attendance) => attendance.teacher)
  attendence: Attendance[];

  @OneToMany(() => WorkingOff, (working_off) => working_off.teacher)
  working_off: WorkingOff[];
}
