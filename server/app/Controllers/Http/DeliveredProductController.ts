import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import DeliveredProduct from '../../Models/DeliveredProduct'

export default class DeliveredProductController {
  public async index({ response }: HttpContextContract) {
    try {
      const deliveredProducts = await DeliveredProduct.query().select('*').from('deliveredProductsPerformance')
      return response.json({
        success: true,
        message: 'DeliveredProducts retrieved successfully',
        data: deliveredProducts,
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
      const deliveredProduct = await DeliveredProduct.find(params.id)
      if (deliveredProduct) {
        return response.json({
          success: true,
          message: 'DeliveredProduct found',
          data: deliveredProduct,
        })
      } else {
        return response.json({
          success: true,
          message: 'DeliveredProduct not found',
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
      const data = request.only(['product_id', 'product_name', 'user_id', 'rate', 'description'])
      const deliveredProduct = await DeliveredProduct.create(data)
      return response.json({
        success: true,
        message: 'DeliveredProduct created successfully',
        data: deliveredProduct,
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
      const deliveredProduct = await DeliveredProduct.findOrFail(params.id)
      if (!deliveredProduct) {
        return response.json({
          success: true,
          message: 'DeliveredProduct not found',
          data: null,
        })
      } else {
        deliveredProduct.merge(request.only(['product_id', 'product_name', 'user_id', 'rate', 'description']))
        await deliveredProduct.save()
        return response.json({
          success: true,
          message: 'DeliveredProduct updated successfully',
          data: deliveredProduct,
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
      const deliveredProduct = await DeliveredProduct.find(params.id)
      if (deliveredProduct) {
        deliveredProduct.delete()
        return response.json({
          success: true,
          message: 'Successfully deleted the deliveredProduct',
          data: null,
        })
      } else {
        return response.json({
          success: false,
          message: 'DeliveredProduct does not exist',
          data: deliveredProduct,
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
