import {
  Entity, PrimaryGeneratedColumn, BaseEntity, ManyToOne, Column, OneToMany, JoinColumn
} from 'typeorm'
import { Employee } from './employee'
import { LeaveRecord } from './leaveRecord'

@Entity( { name: 'employee_leave' } )
export class EmployeeLeave extends BaseEntity {
  @PrimaryGeneratedColumn( 'identity' )
    id: string

  @ManyToOne( () => Employee, employee => employee.leaves )
  @JoinColumn( { name: 'employee_id' } )
    employee: Employee
  
  @Column()
    employee_id: number

  @Column()
    period: string

  @Column()
    total_prev_period_leave: number

  @Column()
    total_current_period_leave: number
  
  @Column()
    total_additional_leave: number
  
  @Column()
    available_leave: number

  @Column()
    taken_leave: number

  @OneToMany( () => LeaveRecord, record => record.id )
    records: LeaveRecord[]
}
