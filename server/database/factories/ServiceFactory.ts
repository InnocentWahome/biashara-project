import Factory from '@ioc:Adonis/Lucid/Factory'
import Service from 'App/Models/Service'

export const ServiceFactory = Factory.define(Service, ({ faker }) => {
  return {
    category: faker.random.arrayElement([
      'Software Update',
      'Service Request',
      'Maintenance'
    ]),
    description: faker.commerce.productDescription(),
    userId: faker.datatype.number(),
    date: faker.date.future(),
  }
}).build()
