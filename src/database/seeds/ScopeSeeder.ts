import { Scope } from '@entity/scopes'
import { db } from 'src/app'

const scopeSeeds = async () => {
  // eslint-disable-next-line no-console
  console.info( 'Seeding Scope data' )
  const scopes = [
    {
      create_employee: true,
      read_employee  : true,
      update_employee: true,
      delete_employee: true
    },
    {
      create_employee: true,
      read_employee  : true,
      update_employee: true,
      delete_employee: true
    },
    {
      create_employee: false,
      read_employee  : true,
      update_employee: false,
      delete_employee: false
    }
  ]

  await db.getConnection().getRepository( Scope )
    .insert( scopes )
}

export default scopeSeeds
