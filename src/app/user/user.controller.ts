import {
  Body, Controller, Delete, Get, Post, Put, Query, Route, Security, Tags
} from 'tsoa'
import {
  getAllUserService, createUserService, updateUserService, deleteUserService, changePasswordService
} from './user.service'

@Tags( 'User Permission' )
@Route( '/api/user-permission' )
@Security( 'api_key' )
export class UserPermissionController extends Controller {
  @Get( '/get-all/' )
  @Security( 'api_key', ['read:user'] )
  public async getAllUser () {
    return await getAllUserService()
  }

  @Post( '/create/' )
  @Security( 'api_key', ['create:user'] )
  public async createUser ( @Body() body: { email: string, roles: string[] } ) {
    return await createUserService( { email: body.email, roles: body.roles } )
  }

  @Put( '/change-password/{id}/' )
  @Security( 'api_key', ['read:employee'] )
  public async changePassword ( @Query( 'id' ) id: string, @Body() body: {email: string, password: string} ) {
    return await changePasswordService( {
      id: Number( id ), password: body.password, email: body.email
    } )
  }

  @Put( '/update/{id}/' )
  @Security( 'api_key', ['update:user'] )
  public async updateUser ( @Query( 'id' ) id: string, @Body() body: { email: string, roles: string[] } ) {
    return await updateUserService( {
      id: Number( id ), email: body.email, roles: body.roles
    } )
  }

  @Delete( '/delete/{id}/' )
  @Security( 'api_key', ['delete:user'] )
  public async deleteUser ( @Query( 'id' ) id: string ) {
    return await deleteUserService( { id: Number( id ) } )
  }
}
