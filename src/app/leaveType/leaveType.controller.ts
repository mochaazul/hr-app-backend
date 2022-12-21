import { Employee } from '@entity/employee'
import { LeaveType } from '@entity/leaveType'
import makeResponse from 'src/helper/response'
import {
  Body,
  Controller, Delete, Get, Post, Put, Query, Route, Security, Tags
} from 'tsoa'
import { LeaveTypeCreatePayload, LeaveTypeUpdatePayload } from './leaveType.interface'

@Tags( 'Employee' )
@Route( '/api/leave-type' )
export class LeaveTypeController extends Controller {
  @Security( 'api_key' )
  @Get( '/' )
  public async getAllLeaveTypes () {
    try {
      const leaveTypes = await LeaveType.find( )
      return makeResponse.success( { data: leaveTypes } )
    } catch ( error ) {
      return error
    }
  }

  @Security( 'api_key' )
  @Post( '/' )
  public async createLeaveType ( @Body() {
    code, days, name
  }: LeaveTypeCreatePayload ) {
    try {
      const leaveType = new LeaveType()
      leaveType.code = code
      leaveType.days = days
      leaveType.name = name
      await leaveType.save()
      return makeResponse.success( { data: leaveType } )
    } catch ( error ) {
      return error
    }
  }

  @Security( 'api_key' )
  @Put( '/{id}' )
  public async updateEmployee ( @Query( 'id' ) id: string, @Body() {
    code, days, name
  }: LeaveTypeUpdatePayload ) {
    try {
      const leaveType = await LeaveType.findOneOrFail( { where: { id } } )
      leaveType.code = code ?? leaveType.code
      leaveType.days = days ?? leaveType.days
      leaveType.name = name ?? leaveType.name
      await leaveType.save()
      return makeResponse.success( { data: leaveType } )
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
