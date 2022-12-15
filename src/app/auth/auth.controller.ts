import { E_ERROR } from 'src/constants/errorTypes'
import { Errors } from 'src/errorHandler'
import {
  Body, Post, Route, Tags
} from 'tsoa'
import { LoginRequestParameter, RegisterRequestParameter } from './auth.interface'
import { loginService, registerUserService } from './auth.service'

@Tags( 'Authorization' )
@Route( '/api/auth' )
export class AuthController {
  @Post( '/login' )
  public async login ( @Body() payload: LoginRequestParameter ) {
    try {
      if ( !payload.email || !payload.password ) {
        throw new Errors( E_ERROR.EMAIL_AND_PASSWORD_REQUIRED )
      }
      const response = await loginService( payload )
      return response
    } catch ( error: any ) {
      return await Promise.reject( new Errors( error ) )
    }
  }

  @Post( '/register' )
  public async register ( @Body() payload: RegisterRequestParameter ) {
    try {
      if ( !payload.email || !payload.password || !payload.name ) {
        throw new Errors( E_ERROR.REGISTER_INVALID_PAYLOAD )
      }
      return await registerUserService( payload )
    } catch ( error ) {
      return error
    }
  }
}
