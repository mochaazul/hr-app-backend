import { Employee } from '@entity/employee'
import _ from 'lodash'
import { E_ERROR } from 'src/constants/errorTypes'
import makeResponse from 'src/helper/response'

import {
  Controller, Get, Query, Route, Tags
} from 'tsoa'

@Tags( 'Tracker' )
@Route( '/api/tracker' )
export class TrackerController extends Controller {
  @Get( '/' )
  public async getTracker (
  @Query() period: string
  ) {
    try {
      if ( !period ) throw E_ERROR.BAD_REQUEST

      const employees = await Employee.find( { relations: ['leaves', 'leaves.records'] } )

      const filteredEmployees = employees.map( employee => {
        const formattedEmployee = _.omit( employee, 'leaves' )

        const leaveData = employee.leaves.find( leave => leave.period === period )

        if ( !leaveData ) throw E_ERROR.NO_PERIOD_SPECIFIED
        const formattedLeaveData = _.omit( leaveData, ['employee_id'] )
        return { ...formattedEmployee, ...formattedLeaveData }
      } )

      return makeResponse.success( { data: filteredEmployees } )
    } catch ( error ) {
      console.log( error )
      return error
    }
  }
}
