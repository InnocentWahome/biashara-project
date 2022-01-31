import Factory from '@ioc:Adonis/Lucid/Factory'
import Task from 'App/Models/Task'

export const TaskFactory = Factory.define(Task, ({ faker }) => {
  return {
    name: faker.lorem.word(),
    description: faker.lorem.sentence(),
  }
}).build()
