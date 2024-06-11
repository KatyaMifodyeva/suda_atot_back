import { ManyToOne, Entity, PrimaryColumn, OneToMany, Column } from 'typeorm';
import { Repayments } from './repayments.entity';
import { Student } from './student.entity';
import { Group } from './group.entity';

@Entity('agreements')
export class Agreements {
  @PrimaryColumn({ type: 'bigint' })
  id: string;

  @Column()
  start_date: string

  @Column()
  end_date: string

  @Column()
  price: number

  @OneToMany(() => Repayments, (repayments) => repayments.agreements)
  repayments: Repayments[];

  @ManyToOne(() => Student, (student) => student.agreements)
  student: Student;

  @ManyToOne(() => Group, (Group) => Group.agreements)
  gropes: Group;
}
