import Factory from '@ioc:Adonis/Lucid/Factory'
import Service from 'App/Models/Service'

export const ServiceFactory = Factory.define(Service, ({ faker }) => {
  return {
    category: faker.random.arrayElement([
      'softwareUpdate',
      'serviceRequest',
      'maintenance'
    ]),
    description: faker.lorem.sentence(),
    userId: faker.datatype.number(),
    date: faker.datatype.number(),
  }
}).build()
