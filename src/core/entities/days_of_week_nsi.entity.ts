import { Column, Entity, PrimaryColumn, OneToMany } from 'typeorm';
import { Schedule } from './shedule.entity';
import { WorkingOff } from './working_off.entity';

@Entity('days_of_week_nsi')
export class DaysOfWeekNSI {
  @PrimaryColumn({ type: 'bigint' })
  id: string;

  @Column({ length: 255 })
  name: string;

  // @OneToMany(() => Expenses, (expenses) => expenses.expenses_nsi)
  // expenses: Expenses[];

  @OneToMany(() => Schedule, (schedule) => schedule.days_of_week)
  schedule: Schedule[];

  @OneToMany(() => WorkingOff, (working_off) => working_off.days_of_week)
  working_off: WorkingOff[];
}
