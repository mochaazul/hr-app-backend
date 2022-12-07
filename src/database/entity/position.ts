import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne
} from 'typeorm'
import { Employee } from './employee'

@Entity( { name: 'position' } )
export class Position extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number

  @Column( { unique: true, nullable: true } )
    name?: string

  @ManyToOne( () => Employee, ( employee: Employee ) => employee.id )
    employee: Employee
}
