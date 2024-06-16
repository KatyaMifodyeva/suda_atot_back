import { Column, Entity, PrimaryColumn, ManyToMany, JoinTable } from 'typeorm';
import { Role } from './role.entity';

@Entity('users') //пример сущности
export class User {
  @PrimaryColumn({ type: 'bigint' })
  id: string;

  @Column({ length: 255 })
  username: string;

  @Column({ length: 255 })
  password: string;


  @ManyToMany(() => Role)
  @JoinTable({
    name: 'user_role'
  })
  roles: Role[];
}
