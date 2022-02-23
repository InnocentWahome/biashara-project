import Factory from '@ioc:Adonis/Lucid/Factory'
import WorkLog from 'App/Models/WorkLog'
import { UserFactory } from './UserFactory'


export const WorkLogFactory = Factory.define(WorkLog, ({ faker }) => {
  return {
    date:  faker.commerce.productDescription(),
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
    userEmail: faker.internet.email(),
    description: faker.commerce.productDescription(),
    hours: faker.datatype.number(),
    approval: false, 
  }
}).relation('user', () => UserFactory)
.build()
