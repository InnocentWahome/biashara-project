import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Task from '../../Models/Task'
export default class TaskController {
  public async index({ response }: HttpContextContract) {
    try {
      const tasks = await Task.query().select('*').from('tasks')
      return response.json({
        success: true,
        message: 'Tasks retrieved successfully',
        data: tasks,
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
      const task = await Task.find(params.id)
      if (task) {
        return response.json({
          success: true,
          message: 'Task found',
          data: task,
        })
      } else {
        return response.json({
          success: true,
          message: 'Task not found',
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
      const task = await Task.create(data)
      return response.json({
        success: true,
        message: 'Task created successfully',
        data: task,
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
      const task = await Task.findOrFail(params.id)
      if (!task) {
        return response.json({
          success: true,
          message: 'Task not found',
          data: null,
        })
      } else {
        task.merge(request.only(['name', 'description', 'students']))
        // task.duration = request.input('duration')
        // task.price = request.input('price')
        // task.taskName = request.input('task_name')
        await task.save()
        return response.json({
          success: true,
          message: 'Task updated successfully',
          data: task,
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
      const task = await Task.find(params.id)
      if (task) {
        task.delete()
        return response.json({
          success: true,
          message: 'Successfully deleted the task',
          data: null,
        })
      } else {
        return response.json({
          success: false,
          message: 'Task does not exist',
          data: task,
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
