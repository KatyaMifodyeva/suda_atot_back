import { Column, Entity, PrimaryColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Student } from './student.entity';
import { Cabinet } from './cabinet.entity';
import { Expenses } from './expenses.entity';
import { User } from './user.entity';
import { Managers } from './managers.entity';
import { Coordinator } from './coordinators.entity';

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

  @ManyToOne(() => Managers)
  @JoinColumn({name: 'manager_id'})
  manager: Managers;

  @ManyToOne(() => Coordinator)
  @JoinColumn({name: 'coordinator_id'})
  coordinator: Coordinator;
  //fk упр
  //fk координатор
}
