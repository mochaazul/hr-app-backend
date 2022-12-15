import { Employee } from '@entity/employee'
import { EmployeeLeave } from '@entity/employeLeave'
import { db } from 'src/app'

const employees = [
  {
    name            : 'Achmad Ramdhani Aprianto',
    position        : 3,
    employement_date: '15-Mar-19'
  },
  {
    name            : 'Adinda Ayu Herdianto',
    position        : 20,
    employement_date: '01-Nov-22'
  },
  {
    name            : 'Aditya Ferdie Gale Saputra',
    position        : 6,
    employement_date: '05-Jul-21'
  },
  {
    name            : 'Afan Ramdani',
    position        : 11,
    employement_date: '21-Jun-21'
  },
  {
    name            : 'Agus Wardianzah',
    position        : 6,
    employement_date: '16-Aug-21'
  },
  {
    name            : 'Aji Priastomo',
    position        : 3,
    employement_date: '25-Nov-21'
  },
  {
    name            : 'Andhiani Mutiara Rizky',
    position        : 11,
    employement_date: '02-Jun-22'
  },
  {
    name            : 'Andi Wibowo',
    position        : 3,
    employement_date: '01-Jul-19'
  },
  {
    name            : 'Angela V.G Tampubolon',
    position        : 6,
    employement_date: '21-Sep-21'
  },
  {
    name            : 'Ardian Junardi',
    position        : 2,
    employement_date: '21-Jun-18'
  },
  {
    name            : 'Asyiatul Rahmi Putri',
    position        : 10,
    employement_date: '16-Dec-19'
  },
  {
    name            : 'Bagas Gusti Pamungkas',
    position        : 3,
    employement_date: '27-Jun-22'
  },
  {
    name            : 'Bernadhus Panji Wibisono',
    position        : 12,
    employement_date: '23-Aug-21'
  },
  {
    name            : 'Bias Arthony',
    position        : 3,
    employement_date: '20-Aug-18'
  },
  {
    name            : 'Dede Wahyu Hidayat',
    position        : 4,
    employement_date: '15-Jul-19'
  },
  {
    name            : 'Deri Kurniawan',
    position        : 4,
    employement_date: '04-Sep-17'
  },
  {
    name            : 'Dona Alianda',
    position        : 4,
    employement_date: '09-Jul-18'
  },
  {
    name            : 'Edi Djunaidi',
    position        : 4,
    employement_date: '02-Oct-18'
  },
  {
    name            : 'Eki Nurhadi',
    position        : 3,
    employement_date: '08-Dec-21'
  },
  {
    name            : 'Euis Desy Khairiyati',
    position        : 14,
    employement_date: '14-Feb-22'
  },
  {
    name            : 'Evana Fransisca',
    position        : 18,
    employement_date: '17-Jan-22'
  },
  {
    name            : 'Fadly Kayo',
    position        : 5,
    employement_date: '10-Apr-17'
  },
  {
    name            : 'Fakhreza Dwiputra Suparyadi',
    position        : 6,
    employement_date: '04-Oct-21'
  },
  {
    name            : 'Gifania Sofia Lestari',
    position        : 6,
    employement_date: '05-Apr-21'
  },
  {
    name            : 'Harliandi',
    position        : 4,
    employement_date: '13-Apr-21'
  },
  {
    name            : 'Haris Pratama',
    position        : 6,
    employement_date: '01-Mar-22'
  },
  {
    name            : 'Hendra Solih Abdurahman',
    position        : 3,
    employement_date: '01-Mar-22'
  },
  {
    name            : 'Husna Yulia Siwandi',
    position        : 15,
    employement_date: '29-Aug-22'
  },
  {
    name            : 'Ilham Abdullah',
    position        : 3,
    employement_date: '08-Jul-22'
  },
  {
    name            : 'Ilham Ramadhan',
    position        : 3,
    employement_date: '01-Dec-22'
  },
  {
    name            : 'Januar Brundi Sarmento',
    position        : 7,
    employement_date: '23-Apr-19'
  },
  {
    name            : 'Jhorgi Hisamawa',
    position        : 3,
    employement_date: '22-Sep-21'
  },
  {
    name            : 'Kholil Akhmad',
    position        : 18,
    employement_date: '15-Aug-22'
  },
  {
    name            : 'Lutfiana Fatmawati',
    position        : 11,
    employement_date: '01-Dec-21'
  },
  {
    name            : 'M. Julius Saputra',
    position        : 6,
    employement_date: '07-Mar-22'
  },
  {
    name            : 'M. Ridho Idris',
    position        : 6,
    employement_date: '16-Aug-21'
  },
  {
    name            : 'Mahmud Hidayattulloh',
    position        : 18,
    employement_date: '01-Mar-22'
  },
  {
    name            : 'Mega Musfivawati',
    position        : 6,
    employement_date: '20-Sep-21'
  },
  {
    name            : 'Misbah',
    position        : 1,
    employement_date: '01-Jun-17'
  },
  {
    name            : 'Moch. Zulfikar',
    position        : 6,
    employement_date: '01-Feb-21'
  },
  {
    name            : 'Mohammad Fadhel Hasbullah',
    position        : 3,
    employement_date: '17-Jan-22'
  },
  {
    name            : 'Moh. Yudhi Saputra T.S',
    position        : 11,
    employement_date: '20-Jul-18'
  },
  {
    name            : 'Mohammad Rizky Susmandiansyah',
    position        : 16,
    employement_date: '27-Aug-18'
  },
  {
    name            : 'Muhammad Khoirul Bakhtiar',
    position        : 6,
    employement_date: '08-Nov-21'
  },
  {
    name            : 'Nenin Mamat Andilono',
    position        : 6,
    employement_date: '22-Nov-21'
  },
  {
    name            : 'Nunes',
    position        : 13,
    employement_date: '01-Jul-18'
  },
  {
    name            : 'Nur Arifianto',
    position        : 8,
    employement_date: '01-Dec-16'
  },
  {
    name            : 'Oki Pratama Putra',
    position        : 3,
    employement_date: '15-Apr-21'
  },
  {
    name            : 'Petrus Eko Pujo Octavianto Lelaona',
    position        : 9,
    employement_date: '01-Feb-16'
  },
  {
    name            : 'Rasyid Respati Wiriaatmaja',
    position        : 11,
    employement_date: '03-Feb-22'
  },
  {
    name            : 'Rendy Mulyo Prabowo',
    position        : 18,
    employement_date: '10-Jan-22'
  },
  {
    name            : 'Rendy Setiadi',
    position        : 6,
    employement_date: '19-Nov-21'
  },
  {
    name            : 'Riko Logwirno',
    position        : 6,
    employement_date: '30-Aug-21'
  },
  {
    name            : 'Risa Sarah Septiarani',
    position        : 11,
    employement_date: '01-Dec-22'
  },
  {
    name            : 'Riska Widiyanti',
    position        : 17,
    employement_date: '09-Sep-19'
  },
  {
    name            : 'Rita Yusiarmayanti',
    position        : 21,
    employement_date: '07-May-18'
  },
  {
    name            : 'Riswan Ardiansah',
    position        : 6,
    employement_date: '01-Sep-20'
  },
  {
    name            : 'Rizky Dwiputra',
    position        : 6,
    employement_date: '24-Jan-22'
  },
  {
    name            : 'Rusman Jaya',
    position        : 4,
    employement_date: '11-Sep-17'
  },
  {
    name            : 'Tri Agung Prasetio',
    position        : 3,
    employement_date: '10-Jan-22'
  },
  {
    name            : 'Uthary Maladhika',
    position        : 19,
    employement_date: '01-May-19'
  },
  {
    name            : 'Yogie Arifin Praja Ersa Putra',
    position        : 6,
    employement_date: '21-Feb-22'
  },
  {
    name            : 'Zacky Farhan',
    position        : 17,
    employement_date: '01-Sep-22'
  }
]

const randomNumber = () => Math.floor( Math.random() * 10 ) + 1

const employeeSeeds = async () => {
  // eslint-disable-next-line no-console
  console.info( 'Seeding employee data' )

  const employeeData = employees.map( employee => {
    return {
      name           : employee.name,
      position_id    : employee.position,
      employment_date: employee.employement_date
    }
  } )

  const employeLeave = employees.map( ( employee, index ) => {
    const availableLeave = 25
    const takenLeave = randomNumber()
    return {
      employee_id               : index + 1,
      period                    : '2020',
      total_prev_period_leave   : randomNumber(),
      total_current_period_leave: takenLeave,
      total_additional_leave    : randomNumber(),
      available_leave           : availableLeave - takenLeave,
      taken_leave               : takenLeave
    }
  } )

  await db.getConnection().getRepository( Employee )
    .insert( employeeData )

  await db.getConnection().getRepository( EmployeeLeave )
    .insert( employeLeave )
}

export default employeeSeeds
