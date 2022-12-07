import {
  Entity, PrimaryGeneratedColumn, BaseEntity, Column
} from 'typeorm'

@Entity( { name: 'leave_types' } )
export class LeaveType extends BaseEntity {
  @PrimaryGeneratedColumn( 'identity' )
    id: string

  @Column()
    name: string

  @Column()
    code: string

  @Column()
    days: number
}
