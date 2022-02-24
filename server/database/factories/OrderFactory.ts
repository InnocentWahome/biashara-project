import Factory from '@ioc:Adonis/Lucid/Factory'
import Order from 'App/Models/Order'
import { UserFactory } from './UserFactory'

export const OrderFactory = Factory.define(Order, ({ faker }) => {
  return {
    productId: faker.datatype.number(),
    productName: faker.commerce.productName(),
    userId: faker.datatype.number(),
    userEmail: faker.internet.email(),
    cost: faker.datatype.number(),
    quantity: faker.datatype.number(),
    paymentStatus: faker.datatype.boolean(),
    dispatchStatus: faker.datatype.boolean(), 
    deliveryStatus: faker.datatype.boolean()
  }
})
.relation('user', () => UserFactory)
.build()
