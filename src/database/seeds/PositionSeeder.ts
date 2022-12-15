import { Position } from '@entity/position'
import { db } from 'src/app'

const positionSeeds = async () => {
  // eslint-disable-next-line no-console
  console.info( 'Seeding Position data' )

  const positions =
      [
        { name: 'Office Boy' },
        { name: 'Lead Back End Developer Engineer' },
        { name: 'Back End Developer Engineer' },
        { name: 'Sr. Back End Developer Engineer' },
        { name: 'Lead Front End Developer Engineer' },
        { name: 'Front End Developer Engineer' },
        { name: 'Sr. Front End Developer Engineer' },
        { name: 'Sr. Mobile Developer Engineer' },
        { name: 'Head of Platform Development' },
        { name: 'Head of Project' },
        { name: 'Project Manager' },
        { name: 'HRGA Manager' },
        { name: 'Lead UI/UX Designer' },
        { name: 'UI/UX Designer' },
        { name: 'Sr. UI/UX Designer' },
        { name: 'Lead QA Engineer' },
        { name: 'Sr. QA Engineer' },
        { name: 'QA Engineer' },
        { name: 'Finance & Accounting Officer' },
        { name: 'Technical Writer' },
        { name: 'HRGA Officer' }
      ]
  await db.getConnection().getRepository( Position )
    .insert( positions )
}

export default positionSeeds
