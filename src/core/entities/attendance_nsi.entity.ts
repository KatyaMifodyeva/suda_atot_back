import { Entity, PrimaryColumn, OneToMany, Column } from 'typeorm';
import { Attendance } from './attendance.entity';

@Entity('attendance_nsi')
export class AttendanceNsi {
  @PrimaryColumn({ type: 'bigint' })
  id: string;

  @Column()
  name: string

  @OneToMany(() => Attendance, (attendance) => attendance.attendance_nsi)
  attendance: Attendance[];
}
