import Factory from '@ioc:Adonis/Lucid/Factory'
import Course from 'App/Models/Course'

export const CourseFactory = Factory.define(Course, ({ faker }) => {
  return {
    name: faker.name.jobTitle(),
    description: faker.name.jobDescriptor(),
    students: faker.datatype.number(),
  }
}).build()
