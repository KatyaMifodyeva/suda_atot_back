import { ManyToOne, Entity, PrimaryColumn, OneToMany, Column } from 'typeorm';
import { Student } from './student.entity';
import { Course } from './course.entity';
import { Agreements } from './agreements.entity';
import { Teacher } from './teacher.entity';

@Entity('groups') //пример сущности
export class Group {
  @PrimaryColumn({ type: 'bigint' })
  id: string;

  @Column()
  number: number;

  @OneToMany(() => Student, (students) => students.group)
  students: Student[];

  @ManyToOne(() => Course, (courses) => courses.groups)
  courses: Course;

  @ManyToOne(() => Teacher, (teachers) => teachers.groups)
  teachers: Teacher;

  @OneToMany(() => Agreements, (agreements) => agreements.gropes)
  agreements: Agreements[];
}
