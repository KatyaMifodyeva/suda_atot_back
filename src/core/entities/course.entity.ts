import { Column, Entity, PrimaryColumn, OneToMany } from 'typeorm';
import { Material } from './material.entity';
import { Tests } from './tests.entity';
import { Group } from './group.entity';

@Entity('courses') //пример сущности
export class Course {
  @PrimaryColumn({ type: 'bigint' })
  id: string;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  requirement_age: string;

  @Column({})
  requirements: string;

  @OneToMany(() => Material, (material) => material.course)
  materials: Material[];

  @OneToMany(() => Tests, (test) => test.course)
  tests: Tests[];

  @OneToMany(() => Group, (groups) => groups.courses)
  groups: Group[];
}
