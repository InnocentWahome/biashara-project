import Factory from '@ioc:Adonis/Lucid/Factory'
import Product from 'App/Models/Product'

export const ProductFactory = Factory.define(Product, ({ faker }) => {
  return {
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    quantity: faker.datatype.number(),
    price: faker.datatype.number(),
    image: faker.random.image(),
  }
}).build()
