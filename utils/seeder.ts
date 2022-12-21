import doSeeding from 'src/database/seeds'
import { createConnection } from 'typeorm'
import dotenv from 'dotenv'
import { Scope } from '@entity/scopes'
import { User } from '@entity/user'
import { Employee } from '@entity/employee'
import { Position } from '@entity/position'
import { EmployeeLeave } from '@entity/employeLeave'
import { Role } from '@entity/role'
import { LeaveRecord } from '@entity/leaveRecord'
import { LeaveType } from '@entity/leaveType'

dotenv.config( {} )

void ( async () => {
  // eslint-disable-next-line n/no-path-concat
  await createConnection( {
    type    : 'postgres',
    host    : 'localhost',
    port    : Number( process.env.TEST_DATABASE_PORT ) || 5433,
    username: process.env.TEST_DATABASE_USERNAME,
    password: process.env.TEST_DATABASE_PASSWORD,
    database: process.env.TEST_DATABASE_NAME,
    // eslint-disable-next-line n/no-path-concat
    entities: [
      Scope,
      User,
      Employee,
      Position,
      EmployeeLeave,
      Role,
      LeaveRecord,
      LeaveType
    ],
    dropSchema : true,
    synchronize: true,
    logging    : false
  } ).then( async _con => {
    await doSeeding( _con )
  } )
    .catch( console.error )
} )()
