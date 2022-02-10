import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from '../../Models/Product'

export default class ProductController {
  public async index({ response }: HttpContextContract) {
    try {
      const products = await Product.query().select('*').from('products')
      return response.json({
        success: true,
        message: 'products retrieved successfully',
        data: products,
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
      const product = await Product.find(params.id)
      if (product) {
        return response.json({
          success: true,
          message: 'Product found',
          data: product,
        })
      } else {
        return response.json({
          success: true,
          message: 'Product not found',
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
      const data = request.only(['name', 'description', 'price', 'image', 'quantity'])
      const product = await Product.create(data)
      return response.json({
        success: true,
        message: 'Product created successfully',
        data: product,
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
      const product = await Product.findOrFail(params.id)
      if (!product) {
        return response.json({
          success: true,
          message: 'Product not found',
          data: null,
        })
      } else {
        product.merge(request.only(['name', 'description', 'price', 'image', 'quantity']))
        // product.duration = request.input('duration')
        // product.price = request.input('price')
        // product.productName = request.input('product_name')
        await product.save()
        return response.json({
          success: true,
          message: 'Product updated successfully',
          data: product,
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
      const product = await Product.find(params.id)
      if (product) {
        product.delete()
        return response.json({
          success: true,
          message: 'Successfully deleted the product',
          data: null,
        })
      } else {
        return response.json({
          success: false,
          message: 'Product does not exist',
          data: product,
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
