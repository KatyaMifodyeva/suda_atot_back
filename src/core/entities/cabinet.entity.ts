import { ManyToOne, Entity, PrimaryColumn, OneToMany } from 'typeorm';
import { Material } from './material.entity';
import { Tests } from './tests.entity';
import { Student } from './student.entity';
import { School } from './school.entity';
import { Schedule } from './shedule.entity';

@Entity('cabinets')
export class Cabinet {
  @PrimaryColumn({ type: 'bigint' })
  id: string;

  @ManyToOne(() => School, (school) => school.cabinets)
  school: School;

  @OneToMany(() => Student, (student) => student.school)
  students: Student[];

  @OneToMany(() => Schedule, (Shedule) => Shedule.cabinet)
  shedule: Schedule[];

  //fk упр
  //fk координатор
  //cabinets
  //students
}
