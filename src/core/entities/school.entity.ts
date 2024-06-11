import { Column, Entity, PrimaryColumn, OneToMany } from 'typeorm';
import { Material } from './material.entity';
import { Tests } from './tests.entity';
import { Student } from './student.entity';
import { Cabinet } from './cabinet.entity';
import { Expenses } from './expenses.entity';

@Entity('school')
export class School {
  @PrimaryColumn({ type: 'bigint' })
  id: string;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  address: string;

  @Column({ length: 255 })
  phone_number: string;

  @OneToMany(() => Student, (student) => student.school)
  students: Student[];

  @OneToMany(() => Expenses, (expenses) => expenses.school)
  expenses: Expenses[];

  @OneToMany(() => Cabinet, (cabinet) => cabinet.school)
  cabinets: Cabinet[];

  //fk упр
  //fk координатор
  //cabinets
  //students
}
