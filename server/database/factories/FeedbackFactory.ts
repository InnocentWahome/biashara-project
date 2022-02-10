import Factory from '@ioc:Adonis/Lucid/Factory'
import Feedback from 'App/Models/Feedback'
// import { UserFactory } from './UserFactory'
// import  Product from 'App/Models/Product'

export const FeedbackFactory = Factory.define(Feedback, ({ faker }) => {
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
