import doSeeding from 'src/database/seeds'
import { createConnection } from 'typeorm'
import dotenv from 'dotenv'

dotenv.config( {} )

void ( async () => {
  // eslint-disable-next-line n/no-path-concat
  console.log( __dirname + '/entity/*.ts' )
  await createConnection( {
    type       : 'postgres',
    host       : 'localhost',
    port       : Number( process.env.TEST_DATABASE_PORT ) || 5433,
    username   : process.env.TEST_DATABASE_USERNAME,
    password   : process.env.TEST_DATABASE_PASSWORD,
    database   : process.env.TEST_DATABASE_NAME,
    // eslint-disable-next-line n/no-path-concat
    entities   : ['../src/database/entity/*.ts'],
    dropSchema : true,
    synchronize: true,
    logging    : false
  } ).then( async _con => {
    await doSeeding( )
  } )
    .catch( console.error )
} )()
