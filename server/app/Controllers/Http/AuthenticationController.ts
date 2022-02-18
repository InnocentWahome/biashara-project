import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema } from '@ioc:Adonis/Core/Validator'

import User from 'App/Models/User'

/**
 * Resourceful controller for interacting with authentication
 *
 * @export
 * @class AuthenticationController
 */
export default class AuthenticationController {
  /**
   * Query and retrieve a user's profile
   *
   * @param {HttpContextContract} {auth, response}
   * @return {*}
   * @memberof AuthenticationController
   */
  public async user({ auth, response }: HttpContextContract) {
    try {
      await auth.use('api').authenticate()

      response.status(200).json({
        success: true,
        message: 'Successfully retrieved the logged in user profile',
        data: auth.use('api').user,
      })
    } catch (error) {
      response.status(500).json({
        success: false,
        message: error.message,
        data: error,
      })
    }
  }

  public async index({ response }: HttpContextContract) {
    try {
      const users = await User.query().select('*').from('users')
      return response.json({
        success: true,
        message: 'Users retrieved successfully',
        data: users,
      })
    } catch (error) {
      return response.json({
        success: false,
        message: error.message,
        data: error,
      })
    }
  }

/**
   * Display a single user
   * GET /users/:id
   *
   * @param  {Object} { request, response }: HttpContextContract
   * @return {[type]}    [description]
   */
 public async show ({params, response}: HttpContextContract) {
  try {
    const user = await User.find(params.id)
    if (!user) {
      return response.status(404).json({
        success: false,
        message: 'User not found',
        data: null,
      })
    }
    return response.status(200).json({
      success: true,
      message: 'Successfully retrieved the user',
      data: user,
    })
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.message,
      data: error,
    })
  }
}
  
  /**
   * Authenticate an existing user
   *
   * @param {HttpContextContract} {auth, request, response}
   * @memberof AuthenticationController
   */
  public async login({ auth, request, response }: HttpContextContract) {
    try {
      const loginSchema = schema.create({
        email: schema.string({}, [rules.email()]),
        password: schema.string(),
      })

      const payload = await request.validate({ schema: loginSchema })
      const token = await auth.use('api').attempt(payload.email, payload.password)
      response.status(200).json({
        success: true,
        message: 'Successfully authenticated',
        data: token
      })
    } catch (error) {
      response.status(500).json({
        success: false,
        message: error.message,
        data: error,
      })
    }
  }

  /**
   * Create A New User
   *
   * @param {HttpContextContract} {request, response}
   * @return {*}
   * @memberof AuthenticationController
   */
  public async register({ request, response }: HttpContextContract) {
    try {
      const registerSchema = schema.create({
        firstName: schema.string(),
        lastName: schema.string(),
        phoneNumber: schema.string(),
        email: schema.string({}, [rules.email()]),
        password: schema.string(),
        role: schema.string(),
      })

      const payload = await request.validate({ schema: registerSchema })
      const user = await User.create(payload)
      await user.refresh()

      return response.status(200).json({
        success: true,
        message: 'Successfully registered',
        data: user,
      })
    } catch (error) {
      response.status(500).json({
        success: false,
        message: error.message,
        data: error,
      })
    }
  }

  /**
   * Send a password reset mail
   *
   * @param {HttpContextContract} {request, response}
   * @return {*}
   * @memberof AuthenticationController
   */
  public async forgotPassword({ request, response }: HttpContextContract) {
    try {
      const forgotPasswordSchema = schema.create({
        email: schema.string({}, [rules.email()]),
      })

      const payload = await request.validate({ schema: forgotPasswordSchema })

      const user = await User.findBy('email', payload.email)

      if (!user) {
        return response.status(400).json({
          success: false,
          message: 'User not found in the system',
          data: null,
        })
      }
      // generate random password
      const newPassword = Math.random().toString(36).substring(7)
      //const resetExpiry = ''
      await user.merge({
        password: newPassword,
        //isReset:true,
        //resetExpiry:resetExpiry,
      })
      await user.save()
      // TODO: send email containing newly set password
      return response.status(200).json({
        success: true,
        message: 'Follow the instructions sent to your email to login',
        data: null,
      })
    } catch (error) {
      response.status(500).json({
        success: false,
        message: error.message,
        data: error,
      })
    }
  }

  /**
   * Reset User's Password
   *
   * @param {HttpContextContract} {request, response, auth}
   * @return {*}
   * @memberof AuthenticationController
   */
  public async changePassword({ request, response, auth }: HttpContextContract) {
    try {
      const setPasswordSchema = schema.create({
        password: schema.string(),
        confirmPassword: schema.string(),
      })

      await auth.use('api').authenticate()
      const user = auth.use('api').user
      if (!user) {
        return response.status(404).json({
          success: false,
          message: 'user is not authenticated',
          data: null,
        })
      }

      const payload = await request.validate({ schema: setPasswordSchema })
      user.password = payload.password
      await user.save()
      return response.status(200).json({
        success: true,
        message: 'password successfully set',
        data: user,
      })
    } catch (error) {
      response.status(500).json({
        success: false,
        message: error.message,
        data: error,
      })
    }
  }
}
