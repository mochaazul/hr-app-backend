import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinColumn, ManyToOne, OneToOne
} from 'typeorm'
import { Employee } from './employee'
import { Role } from './role'

@Entity( { name: 'user' } )
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number

  @Column( { unique: true, nullable: true } )
    email?: string

  @Column( { unique: true } )
    noInduk: string

  @Column()
    name: string

  @Column( { nullable: true } )
    birth_date?: Date

  @Column()
    password: string

  @ManyToOne( () => Role, ( role: Role ) => role.id, { onDelete: 'CASCADE' } )
  @JoinColumn( { name: 'role_id' } )
    role: Role

  @Column( { nullable: true } )
    role_id: number

  @OneToOne( () => Employee )
  @JoinColumn( { name: 'employee_id' } )
    employee_data: Employee

  @Column( { nullable: true } )
    employee_id: string
}
