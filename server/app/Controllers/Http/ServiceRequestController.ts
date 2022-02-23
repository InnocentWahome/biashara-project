import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Service from '../../Models/Service'

export default class ServiceController {
  public async index({ response }: HttpContextContract) {
    try {
      const serviceRequests = await Service.query().select('*').from('service_requests')
      return response.json({
        success: true,
        message: 'ServiceRequests retrieved successfully',
        data: serviceRequests,
      })
    } catch (error) {
      return response.json({
        success: false,
        message: error.message,
        data: error,
      })
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const serviceRequest = await Service.find(params.id)
      if (serviceRequest) {
        return response.json({
          success: true,
          message: 'ServiceRequest found',
          data: serviceRequest,
        })
      } else {
        return response.json({
          success: true,
          message: 'ServiceRequest not found',
          data: null,
        })
      }
    } catch (error) {
      return response.json({
        success: false,
        message: error.message,
        data: error,
      })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const data = request.only(['user_email', 'user_id', 'description', 'category', 'date', 'completed'])
      const serviceRequest = await Service.create(data)
      return response.json({
        success: true,
        message: 'ServiceRequest created successfully',
        data: serviceRequest,
      })
    } catch (error) {
      return response.json({
        success: false,
        message: error.message,
        data: error,
      })
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const serviceRequest = await Service.findOrFail(params.id)
      if (!serviceRequest) {
        return response.json({
          success: true,
          message: 'ServiceRequest not found',
          data: null,
        })
      } else {
        serviceRequest.merge(request.only(['user_email', 'user_id', 'description', 'category', 'date', 'completed']))
        await serviceRequest.save()
        return response.json({
          success: true,
          message: 'ServiceRequest updated successfully',
          data: serviceRequest,
        })
      }
    } catch (error) {
      return response.json({
        success: false,
        message: error.message,
        data: error,
      })
    }
  }

  public async delete({ params, response }: HttpContextContract) {
    try {
      const serviceRequest = await Service.find(params.id)
      if (serviceRequest) {
        serviceRequest.delete()
        return response.json({
          success: true,
          message: 'Successfully deleted the serviceRequest',
          data: null,
        })
      } else {
        return response.json({
          success: false,
          message: 'ServiceRequest does not exist',
          data: serviceRequest,
        })
      }
    } catch (error) {
      return response.status(500).json({
        success: false,
        message: error.message,
        data: error,
      })
    }
  }
}
