import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Feedback from '../../Models/Feedback'

export default class FeedbackController {
  public async index({ response }: HttpContextContract) {
    try {
      const feedbacks = await Feedback.query().select('*').from('feedbacks')
      return response.json({
        success: true,
        message: 'Feedbacks retrieved successfully',
        data: feedbacks,
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
      const feedback = await Feedback.find(params.id)
      if (feedback) {
        return response.json({
          success: true,
          message: 'Feedback found',
          data: feedback,
        })
      } else {
        return response.json({
          success: true,
          message: 'Feedback not found',
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
      const data = request.only(['product_id', 'product_name', 'date', 'user_email', 'user_id', 'rate', 'description'])
      const feedback = await Feedback.create(data)
      return response.json({
        success: true,
        message: 'Feedback created successfully',
        data: feedback,
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
      const feedback = await Feedback.findOrFail(params.id)
      if (!feedback) {
        return response.json({
          success: true,
          message: 'Feedback not found',
          data: null,
        })
      } else {
        feedback.merge(request.only(['product_id', 'product_name', 'date', 'user_email', 'user_id', 'rate', 'description']))
        await feedback.save()
        return response.json({
          success: true,
          message: 'Feedback updated successfully',
          data: feedback,
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
      const feedback = await Feedback.find(params.id)
      if (feedback) {
        feedback.delete()
        return response.json({
          success: true,
          message: 'Successfully deleted the feedback',
          data: null,
        })
      } else {
        return response.json({
          success: false,
          message: 'Feedback does not exist',
          data: feedback,
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
