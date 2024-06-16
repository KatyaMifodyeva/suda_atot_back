import { Column, Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Schedule } from './shedule.entity';
import { WorkingOff } from './working_off.entity';
import { User } from './user.entity';

@Entity('document')
export class Document {
  @PrimaryColumn({ type: 'bigint' })
  id: string;

  @ManyToOne(() => User)
  @JoinColumn({name: 'sender'})
  sender: User;

  @ManyToOne(() => User)
  @JoinColumn({name: 'receiver'})
  receiver: User;

  @Column({ length: 255 })
  type: string;

  @Column({ length: 255 })
  status: string;

  @Column()
  date: Date;
}
