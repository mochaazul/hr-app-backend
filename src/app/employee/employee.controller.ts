import { Employee } from '@entity/employee'
import { EmployeeLeave } from '@entity/employeLeave'
import { LeaveRecord } from '@entity/leaveRecord'
import { LeaveType } from '@entity/leaveType'
import { E_ERROR } from 'src/constants/errorTypes'
import makeResponse from 'src/helper/response'
import dayjs from 'dayjs'

import {
  Body,
  Controller, Delete, Get, Post, Put, Query, Route, Security, Tags
} from 'tsoa'
import {
  EmployeeAddLeaveRequestBody, EmployeeCreateRequestBody, EmployeeUpdateRequestBody
} from './employee.interfaces'
import { AuthorizationService } from 'generated'

@Tags( 'Employee' )
@Route( '/api/employee' )
export class EmployeeController extends Controller {
  @Security( 'api_key' )
  @Get( '/' )
  public async getAllEmployee () {
    try {
      const employees = Employee.find( { relations: ['employee_leave'] } )
      return makeResponse.success( { data: employees } )
    } catch ( error ) {
      return error
    }
  }

  @Security( 'api_key' )
  @Get( '/leave-stats/{id}' )
  public async getEmployeLeaveStats ( @Query() id: string ) {
    try {
      const employees = Employee.findOneOrFail( id )
      return makeResponse.success( { data: employees } )
    } catch ( error ) {
      return error
    }
  }

  @Security( 'api_key' )
  @Post( '/add-leave' )
  public async addLeave ( @Body() {
    id, leave_type_id, start_date, duration
  }: EmployeeAddLeaveRequestBody ) {
    try {
      const employeeLeaveStats = await EmployeeLeave.findOneOrFail( { where: { employee_id: id } } )
      const leaveType = await LeaveType.findOneOrFail( leave_type_id )
      if ( employeeLeaveStats.available_leave < duration ) throw E_ERROR.INSUFFICIENT_LEAVE_AMOUNT
      
      employeeLeaveStats.taken_leave += duration
      const end_date = new Date( dayjs( start_date ).add( duration, 'day' )
        .format( 'DD-MM-YYY' ) )
      const leaveRecord = new LeaveRecord()
      leaveRecord.employe_leave = employeeLeaveStats
      leaveRecord.leave_type = leaveType
      leaveRecord.start_date = start_date
      leaveRecord.end_date = end_date
      await leaveRecord.save()
      
      return makeResponse.success( { data: employeeLeaveStats } )
    } catch ( error ) {
      return error
    }
  }

  @Security( 'api_key' )
  @Post( '/' )
  public async createEmployee ( @Body() body: EmployeeCreateRequestBody ) {
    try {
      const employee = new Employee()
      employee.birth_date = body.birth_date
      employee.employment_date = body.employement_date
      employee.name = body.name
      employee.phone_number = body.phone_number
      return makeResponse.success( { data: employee } )
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

  @Security( 'api_key' )
  @Delete( '/{id}' )
  public async deleteEmployee ( @Query( 'id' ) id: string ) {
    try {
      const employee = await Employee.findOneOrFail( { where: { id } } )
      await employee.remove()
      return makeResponse.success( { data: employee } )
    } catch ( error ) {
      return error
    }
  }
}
