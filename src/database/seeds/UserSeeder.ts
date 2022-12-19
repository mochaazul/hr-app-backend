import { createHashPassword } from 'src/helper/bcrypt'

const userSeeds = async () => {
  // eslint-disable-next-line no-console
  console.info( 'Seeding User data' )

  const pass: any = createHashPassword( '123123' )
  const Users =
      [
        {
          name    : 'Super Admin',
          password: pass,
          email   : 'admin@example.com',
          role_id : 1
        },
        {
          name    : 'Human Resource',
          password: pass,
          email   : 'hr@example.com',
          role_id : 2
        },
        {
          name    : 'Employee',
          password: pass,
          email   : 'employee@example.com',
          role_id : 3
        }
      ]
  // await db.getConnection().getRepository( User )
  //   .insert( Users )
  return Users
}

export default userSeeds
