// import { OneToMany, Entity, PrimaryColumn, ManyToOne, Column } from 'typeorm';
// import { Course } from './course.entity';

// export enum Difficulties {
//   EASY = 'легкий',
//   MEDIUM = 'средний',
//   HARD = 'сложный',
// }

// @Entity('tests') //пример сущности
// export class Tests {
//   @PrimaryColumn({ type: 'bigint' })
//   id: string;

//   @ManyToOne(() => Course, (course) => course.tests)
//   course: Course;

//   @Column({
//     type: 'enum',
//     enum: Difficulties,
//     default: Difficulties.MEDIUM,
//   })
//   difficulties: Difficulties;
// }
