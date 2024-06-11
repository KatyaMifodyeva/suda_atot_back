import { OneToMany, Entity, PrimaryColumn, ManyToOne, Column } from 'typeorm';
import { Question } from './question.entity';
import { Course } from './course.entity';
import { Results } from './results.entity';

export enum Difficulties {
  EASY = 'легкий',
  MEDIUM = 'средний',
  HARD = 'сложный',
}

@Entity('tests') //пример сущности
export class Tests {
  @PrimaryColumn({ type: 'bigint' })
  id: string;

  @OneToMany(() => Question, (question) => question.test)
  questions: Question[];

  @OneToMany(() => Results, (result) => result.test)
  results: Results[];

  @ManyToOne(() => Course, (course) => course.tests)
  course: Course;

  @Column({
    type: 'enum',
    enum: Difficulties,
    default: Difficulties.MEDIUM,
  })
  difficulties: Difficulties;
}
