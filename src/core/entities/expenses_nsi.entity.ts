import { Column, Entity, PrimaryColumn, OneToMany } from 'typeorm';
import { Course } from './course.entity';
import { Expenses } from './expenses.entity';

@Entity('expenses_nsi')
export class Expenses_nsi {
  @PrimaryColumn({ type: 'bigint' })
  id: string;

  @Column()
  name: number;

  @OneToMany(() => Expenses, (expenses) => expenses.expenses_nsi)
  expenses: Expenses[];
}
