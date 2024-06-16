// import { Column, Entity, PrimaryColumn, ManyToOne } from 'typeorm';
// import { Course } from './course.entity';

// @Entity('materials') //пример сущности
// export class Material {
//   //файл
//   @PrimaryColumn({ type: 'bigint' })
//   id: string;

//   @Column()
//   week: number;

//   @Column({ length: 255 })
//   file_name: string;

//   @ManyToOne(() => Course, (course) => course.materials)
//   course: Course;
// }
