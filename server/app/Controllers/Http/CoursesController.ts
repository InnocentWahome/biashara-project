import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Course from '../../Models/Course'

export default class CoursesController {
  public async index({ response }: HttpContextContract) {
    try {
      const courses = await Course.query().select('*').from('courses')
      return response.json({
        success: true,
        message: 'Courses retrived successfully',
        data: courses,
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
      const course = await Course.find(params.id)
      if (course) {
        return response.json({
          success: true,
          message: 'Course found',
          data: course,
        })
      } else {
        return response.json({
          success: true,
          message: 'Course not found',
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
      const data = request.only(['name', 'description', 'students'])
      const course = await Course.create(data)
      return response.json({
        success: true,
        message: 'Course created successfully',
        data: course,
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
      const course = await Course.findOrFail(params.id)
      if (!course) {
        return response.json({
          success: true,
          message: 'Course not found',
          data: null,
        })
      } else {
        course.merge(request.only(['name', 'description', 'students']))
        // course.duration = request.input('duration')
        // course.price = request.input('price')
        // course.courseName = request.input('course_name')
        await course.save()
        return response.json({
          success: true,
          message: 'Course updated successfully',
          data: course,
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
      const course = await Course.find(params.id)
      if (course) {
        course.delete()
        return response.json({
          success: true,
          message: 'Successfully deleted the course',
          data: null,
        })
      } else {
        return response.json({
          success: false,
          message: 'Course does not exist',
          data: course,
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
