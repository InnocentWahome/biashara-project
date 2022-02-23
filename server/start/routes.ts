import Route from '@ioc:Adonis/Core/Route'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'


Route.get('api/v1', ({ response }: HttpContextContract) => {
  return response.status(200).json({
    success: true,
    message: 'Welcome to Project API',
    data: null,
  })
})
Route.get('api/v1/health', async ({ response }) => {
  const report = await HealthCheck.getReport()

  return report.healthy ? response.ok(report) : response.badRequest(report)
})


//auth routes
Route.group(() => {
  Route.get('/user', 'AuthenticationController.user')
  Route.get('/user/:id', 'AuthenticationController.show')
  Route.get('/users', 'AuthenticationController.index')
  Route.post('/login', 'AuthenticationController.login')
  Route.post('/register', 'AuthenticationController.register')
  Route.post('/forgot-password', 'AuthenticationController.forgotPassword')
  Route.post('/set-password', 'AuthenticationController.resetPassword')
}).prefix('/api/v1/auth')


// courses routes
Route.group(() => {
  Route.group(() => {
    Route.get('/', 'CoursesController.index')
    Route.post('/', 'CoursesController.store')
    Route.get('/:id', 'CoursesController.show')
    Route.put('/:id', 'CoursesController.update')
    Route.delete('/:id', 'CoursesController.delete')
  }).prefix('/course')

  Route.group(() => {
    Route.get('/', 'ProductController.index')
    Route.post('/', 'ProductController.store')
    Route.get('/:id', 'ProductController.show')
    Route.put('/:id', 'ProductController.update')
    Route.delete('/:id', 'ProductController.delete')
  }).prefix('/product')

  Route.group(() => {
    Route.get('/', 'OrderController.index')
    Route.get('/user/:id', 'OrderController.userOrders')
    Route.post('/', 'OrderController.store')
    Route.get('/:id', 'OrderController.show')
    Route.put('/:id', 'OrderController.update')
    Route.delete('/:id', 'OrderController.delete')
  }).prefix('/order')

  Route.group(() => {
    Route.get('/', 'FeedbackController.index')
    Route.post('/', 'FeedbackController.store')
    Route.get('/:id', 'FeedbackController.show')
    Route.put('/:id', 'FeedbackController.update')
    Route.delete('/:id', 'FeedbackController.delete')
  }).prefix('/feedback')

  Route.group(() => {
    Route.get('/', 'DeliveredProductController.index')
    Route.post('/', 'DeliveredProductController.store')
    Route.get('/:id', 'DeliveredProductController.show')
    Route.put('/:id', 'DeliveredProductController.update')
    Route.delete('/:id', 'DeliveredProductController.delete')
  }).prefix('/delivered-products')

  Route.group(() => {
    Route.get('/', 'ServiceRequestController.index')
    Route.post('/', 'ServiceRequestController.store')
    Route.get('/:id', 'ServiceRequestController.show')
    Route.put('/:id', 'ServiceRequestController.update')
    Route.delete('/:id', 'ServiceRequestController.delete')
  }).prefix('/service-request')

  Route.group(() => {
    Route.get('/', 'WorkLogController.index')
    Route.get('/user', 'WorkLogController.userWorkLog')
    Route.post('/', 'WorkLogController.store')
    Route.get('/:id', 'WorkLogController.show')
    Route.put('/:id', 'WorkLogController.update')
    Route.delete('/:id', 'WorkLogController.delete')
  }).prefix('/worklog')
})
  .prefix('/api/v1')
  .middleware('auth')
