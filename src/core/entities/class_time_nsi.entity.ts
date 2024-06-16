import { Column, Entity, PrimaryColumn, OneToMany } from 'typeorm';
import { Schedule } from './shedule.entity';
import { WorkingOff } from './working_off.entity';

@Entity('class_time_nsi')
export class ClassTimeNsi {
  @PrimaryColumn({ type: 'bigint' })
  id: string;

  @Column()
  start_time: Date

  @Column()
  end_time: Date

  // @OneToMany(() => Expenses, (expenses) => expenses.expenses_nsi)
  // expenses: Expenses[];

  @OneToMany(() => Schedule, (schedule) => schedule.class_time)
  schedule: Schedule[];

  @OneToMany(() => WorkingOff, (working_off) => working_off.class_time)
  working_off: WorkingOff[];
}
