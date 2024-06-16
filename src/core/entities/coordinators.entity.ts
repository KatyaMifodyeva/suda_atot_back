import { ManyToOne, Entity, PrimaryColumn, JoinColumn, Column, OneToMany } from 'typeorm';
import { Student } from './student.entity';
import { School } from './school.entity';
import { Schedule } from './shedule.entity';
import { User } from './user.entity';

@Entity('coordinators')
export class Coordinator {
  @PrimaryColumn({ type: 'bigint' })
  id: string;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  surname: string;

  @Column({ length: 255 })
  patronymic: string;

  @Column({ length: 255 })
  birth_date: string;

  @Column({ length: 255 })
  phone_number: string;

  @Column()
  expirience: number;

  @Column({ length: 255 })
  address: string;

  @ManyToOne(() => User)
  @JoinColumn({name: 'user_id'})
  user: User;

  @OneToMany(() => School, (school) => school.coordinator)
  schools: School[];
}