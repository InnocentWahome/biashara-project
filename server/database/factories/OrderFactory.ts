import Factory from '@ioc:Adonis/Lucid/Factory'
import Order from 'App/Models/Order'
// import { UserFactory } from './UserFactory'
// import  Product from 'App/Models/Product'

export const OrderFactory = Factory.define(Order, ({ faker }) => {
  return {
    productId: faker.datatype.number(),
    productName: faker.lorem.word(),
    userId: faker.datatype.number(),
    cost: faker.datatype.number(),
    quantity: faker.datatype.number(),
    adminApproval: faker.datatype.boolean(),
    dispatchStatus: faker.datatype.boolean(),
    deliveryStatus: faker.datatype.boolean(),
  }
})
// .relation('user', () => UserFactory)
// .relation('productId', () => Product)
.build()
