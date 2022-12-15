import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, JoinColumn
} from 'typeorm'
import { EmployeeLeave } from './employeLeave'
import { Position } from './position'

@Entity( { name: 'employee' } )
export class Employee extends BaseEntity {
  @PrimaryGeneratedColumn( 'identity' )
    id: string

  @Column( { unique: true, nullable: true } )
    noInduk: string

  @Column()
    name: string

  @Column( { nullable: true } )
    birth_date?: Date

  @Column( { nullable: true } )
    phone_number: string

  @OneToMany( () => Position, position => position.employees )
  @JoinColumn( { name: 'position_id' } )
    position: Position

  @Column()
    position_id: number

  @Column( { nullable: true } )
    employment_date: Date
  
  @Column( { default: true } )
    is_active: boolean = true

  @OneToMany( () => EmployeeLeave, leave => leave.employee )
    leaves: EmployeeLeave[]
}
