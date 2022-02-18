import Factory from '@ioc:Adonis/Lucid/Factory'
import WorkLog from 'App/Models/WorkLog'
import { UserFactory } from './UserFactory'


export const WorkLogFactory = Factory.define(WorkLog, ({ faker }) => {
  return {
    date: faker.date.future(),
    day: faker.date.weekday(),
    start: faker.datatype.number({
      'min': 0,
      'max': 2400,
    }),
    stop: faker.datatype.number({
      'min': 0,
      'max': 2400,
    }),
    userId: faker.datatype.number(),
    description: faker.commerce.productDescription(),
    hours: faker.datatype.number()
  }
}).relation('user', () => UserFactory)
.build()
