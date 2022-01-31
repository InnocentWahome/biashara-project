import Factory from '@ioc:Adonis/Lucid/Factory'
import Course from 'App/Models/Course'

export const CourseFactory = Factory.define(Course, ({ faker }) => {
  return {
    name: faker.lorem.word(),
    description: faker.lorem.sentence(),
    students: faker.datatype.number(),
  }
}).build()
