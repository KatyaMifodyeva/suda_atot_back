import { Column, Entity, PrimaryColumn, ManyToOne } from 'typeorm';
import { Tests } from './tests.entity';

@Entity('qustions') //пример сущности
export class Question {
  @PrimaryColumn({ type: 'bigint' })
  id: string;

  @Column({ length: 255 })
  question: string; //сколько??

  @Column({ length: 255 })
  answers: string;

  @Column({ length: 500 })
  correct_answer: string;

  @ManyToOne(() => Tests, (test) => test.questions)
  test: Tests;
}
