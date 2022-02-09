import Factory from '@ioc:Adonis/Lucid/Factory'
import Product from 'App/Models/Product'

export const ProductFactory = Factory.define(Product, ({ faker }) => {
  return {
    name: faker.lorem.word(),
    description: faker.lorem.sentence(),
    quantity: faker.datatype.number(),
    price: faker.datatype.number(),
    image: faker.lorem.sentence(),
  }
}).build()
