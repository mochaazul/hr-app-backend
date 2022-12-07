import {
  Entity, PrimaryGeneratedColumn, BaseEntity, Column, ManyToOne
} from 'typeorm'
import { EmployeeLeave } from './employeLeave'
import { LeaveType } from './leaveType'

@Entity( { name: 'leave_record' } )
export class LeaveRecord extends BaseEntity {
  @PrimaryGeneratedColumn( 'identity' )
    id: string

  @ManyToOne( () => LeaveType, type => type.id )
    leave_type: LeaveType

  @Column()
    start_date: Date

  @Column()
    end_date: Date
  
  @ManyToOne( () => EmployeeLeave, employee => employee.id )
    employe_leave: EmployeeLeave
}
