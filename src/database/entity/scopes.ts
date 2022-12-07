import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn
} from 'typeorm'

@Entity( { name: 'scope' } )
export class Scope extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    create_employee: boolean

  @Column()
    read_employee: boolean

  @Column()
    update_employee: boolean

  @Column()
    delete_employee: boolean

  @CreateDateColumn()
    created_at: Date

  @UpdateDateColumn()
    updated_at: Date
}
