import { Employee } from '@entity/employee'
import makeResponse from 'src/helper/response'
import {
  Body,
  Controller, Get, Put, Query, Route, Security, Tags
} from 'tsoa'
import { EmployeeUpdateRequestBody } from './employee.interfaces'

@Tags( 'Employee' )
@Route( '/api/employee' )
export class EmployeeController extends Controller {
  @Security( 'api_key' )
  @Get( '/' )
  public async getAllEmployee () {
    try {
      const employees = Employee.find()
      return makeResponse.success( { data: employees } )
    } catch ( error ) {
      return error
    }
  }

  @Security( 'api_key' )
  @Put( '/{id}' )
  public async updateEmployee ( @Query( 'id' ) id: string, @Body() body: EmployeeUpdateRequestBody ) {
    try {
      const employee = await Employee.findOneOrFail( { where: { id } } )
      employee.birth_date = body.birth_date ?? employee.birth_date
      employee.employment_date = body.employement_date ?? employee.employment_date
      employee.noInduk = body.noInduk ?? employee.noInduk
      employee.phone_number = body.phone_number ?? employee.phone_number
      await employee.save()
      return makeResponse.success( { data: employee } )
    } catch ( error ) {
      return error
    }
  }
}
