import { Column, Entity, PrimaryColumn, ManyToOne } from 'typeorm';
import { Course } from './course.entity';
import { Expenses_nsi } from './expenses_nsi.entity';
import { School } from './school.entity';

@Entity('expenses')
export class Expenses {
  @PrimaryColumn({ type: 'bigint' })
  id: string;

  @Column()
  amount: number;

  @Column({ length: 255 })
  description: string;

  @Column()
  date: Date;

  @ManyToOne(() => Expenses_nsi, (expenses_nsi) => expenses_nsi.expenses)
  expenses_nsi: Expenses_nsi;

  @ManyToOne(() => School, (school) => school.expenses)
  school: School;
}
