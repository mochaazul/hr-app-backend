import {
  Entity, PrimaryGeneratedColumn, BaseEntity, Column, ManyToOne, JoinColumn
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

  @Column( { nullable: true } )
    reason?: string
  
  @ManyToOne( () => EmployeeLeave, employee => employee.id )
  @JoinColumn( { name: 'employee_leave_id' } )
    employe_leave: EmployeeLeave
  
  @Column( { nullable: true } )
    employee_leave_id?: string
}
