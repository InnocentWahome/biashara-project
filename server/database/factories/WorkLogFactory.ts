import Factory from '@ioc:Adonis/Lucid/Factory'
import WorkLog from 'App/Models/WorkLog'

export const WorkLogFactory = Factory.define(WorkLog, ({ faker }) => {
  return {
    date: faker.date.future(),
    day: faker.date.weekday(),
    start: faker.datatype.number(),
    stop: faker.datatype.number(),
    userId: faker.datatype.number(),
    description: faker.commerce.productDescription(),
    hours: faker.datatype.number()
  }
}).build()
