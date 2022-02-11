import Factory from '@ioc:Adonis/Lucid/Factory'
import DeliveredProduct from 'App/Models/DeliveredProduct'
// import { UserFactory } from './UserFactory'
// import  Product from 'App/Models/Product'

export const DeliveredProductFactory = Factory.define(DeliveredProduct, ({ faker }) => {
  return {
    productId: faker.datatype.number(),
    productName: faker.lorem.word(),
    userId: faker.datatype.number(),
    description: faker.lorem.sentence(),
    rate: faker.datatype.number({
      'min': 1,
      'max': 5,
    }),
  }
})
// .relation('user', () => UserFactory)
// .relation('product', () => Product)
.build()
