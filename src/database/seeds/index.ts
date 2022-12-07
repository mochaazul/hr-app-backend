import roleSeeds from './RoleSeeder'
import userSeeds from './UserSeeder'

const doSeeding = async () => {
  try {
    // eslint-disable-next-line no-console
    console.log( 'Seeding data...' )
    await roleSeeds()
    await userSeeds()
    console.log( 'Seeding data finished' )
  } catch ( error ) {
    return error
  }
}

export default doSeeding
