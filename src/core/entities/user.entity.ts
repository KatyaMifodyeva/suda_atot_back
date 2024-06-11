import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('users') //пример сущности
export class User {
  @PrimaryColumn({ type: 'bigint' })
  id: string;

  @Column({ length: 255 })
  username: string;
}
