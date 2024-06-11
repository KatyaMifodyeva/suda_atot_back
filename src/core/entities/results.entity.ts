import { Column, Entity, PrimaryColumn, OneToMany, ManyToOne } from 'typeorm';
import { Material } from './material.entity';
import { Tests } from './tests.entity';
import { Repayments } from './repayments.entity';
import { Student } from './student.entity';

@Entity('results')
export class Results {
  @PrimaryColumn({ type: 'bigint' })
  id: string;

  @Column()
  mark: number;

  @ManyToOne(() => Student, (Student) => Student.results)
  student: Student;

  @ManyToOne(() => Tests, (test) => test.results)
  test: Tests;
}
