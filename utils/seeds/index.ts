import { Employee } from '@entity/employee'
import { EmployeeLeave } from '@entity/employeLeave'
import { Position } from '@entity/position'
import { Role } from '@entity/role'
import { Scope } from '@entity/scopes'
import { User } from '@entity/user'
import { Connection } from 'typeorm'
import employeeSeeds from './EmployeeSeeder'
import positionSeeds from './PositionSeeder'
import roleSeeds from './RoleSeeder'
import scopeSeeds from './ScopeSeeder'
import userSeeds from './UserSeeder'

const doSeeding = async ( _con: Connection ) => {
  try {
    // eslint-disable-next-line no-console
    console.log( 'Seeding data...' )
    const scopes = scopeSeeds()
    const roles = roleSeeds()
    const users = await userSeeds()
    const positions = positionSeeds()
    const { employeLeave, employeeData } = employeeSeeds()
    
    await _con.getRepository( Scope ).insert( scopes )
    await _con.getRepository( Role ).insert( roles )
    await _con.getRepository( User ).insert( users )
    await _con.getRepository( Position ).insert( positions )
    await _con.getRepository( Employee ).insert( employeeData )
    await _con.getRepository( EmployeeLeave ).insert( employeLeave )

    console.log( 'Seeding data finished' )
  } catch ( error ) {
    console.log( error )
    return error
  }
}

export default doSeeding
