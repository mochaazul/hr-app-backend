import employeeSeeds from './EmployeeSeeder'
import positionSeeds from './PositionSeeder'
import roleSeeds from './RoleSeeder'
import scopeSeeds from './ScopeSeeder'
import userSeeds from './UserSeeder'

const doSeeding = async ( ) => {
  try {
    // eslint-disable-next-line no-console
    console.log( 'Seeding data...' )
    await scopeSeeds()
    await roleSeeds()
    await userSeeds()
    await positionSeeds()
    await employeeSeeds()
    console.log( 'Seeding data finished' )
  } catch ( error ) {
    console.log( error )
    return error
  }
}

export default doSeeding
