import { Column, Entity, PrimaryColumn, OneToMany } from 'typeorm';
import { Group } from './group.entity';

@Entity('courses') //пример сущности
export class Course {
  @PrimaryColumn({ type: 'bigint' })
  id: string;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 1024 })
  description: string;

  @Column({ length: 255 })
  requirement_age: string;

  @Column({})
  requirements: string;

  @OneToMany(() => Group, (groups) => groups.courses)
  groups: Group[];
}
