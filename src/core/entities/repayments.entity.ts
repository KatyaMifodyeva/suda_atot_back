import { Column, Entity, PrimaryColumn, ManyToOne } from 'typeorm';
import { Material } from './material.entity';
import { Tests } from './tests.entity';
import { Agreements } from './agreements.entity';

@Entity('repayments')
export class Repayments {
  @PrimaryColumn({ type: 'bigint' })
  id: string;

  @Column()
  amount: number;

  @Column({ length: 255 })
  date: string;

  @Column({ type: 'date' })
  repayment_date: string;

  @Column()
  is_full: boolean;

  @ManyToOne(() => Agreements, (agreement) => agreement.repayments)
  agreements: Agreements;

  //fk заява
}
