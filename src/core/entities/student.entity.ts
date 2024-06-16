import { Column, Entity, PrimaryColumn, ManyToOne, OneToMany } from 'typeorm';
import { School } from './school.entity';
import { Group } from './group.entity';
import { Agreements } from './agreements.entity';
import { Attendance } from './attendance.entity';

@Entity('students') //пример сущности
export class Student {
  @PrimaryColumn({ type: 'bigint' })
  id: string;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  surname: string;

  @Column({ length: 255 })
  patronymic: string;

  @Column({ length: 255 })
  parent_name: string;

  @Column({ length: 255 })
  parent_surname: string;

  @Column({ length: 255 })
  parent_patronymic: string;

  @Column({ length: 255 })
  birth_date: string;

  @Column({ length: 255 })
  phone_number: string;

  @Column({ length: 255 })
  parent_phone_number: string;

  @Column({ length: 255 })
  address: string;

  @Column({ length: 255 })
  description: string;

  @Column({ length: 255 })
  years_with_us: string;

  @Column({ length: 255 })
  arrival_week: string;

  @Column({ length: 255 })
  eliminate_week: string;

  @Column({ length: 255 })
  enter_reason: string;

  @Column({ length: 255 })
  who_knows: string;

  @Column({ length: 255 })
  eliminate_reason: string;

  @ManyToOne(() => School, (School) => School.students)
  school: School;

  @ManyToOne(() => Group, (group) => group.students)
  group: Group;

  @OneToMany(() => Agreements, (agreements) => agreements.student)
  agreements: Agreements[];

  @OneToMany(() => Attendance, (attendance) => attendance.student)
  attendence: Attendance[];
}
