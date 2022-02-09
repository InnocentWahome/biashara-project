import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { CourseFactory } from 'Database/factories/CourseFactory'

export default className CourseSeeder extends BaseSeeder {
  public async run() {
    await CourseFactory.createMany(10)
  }
}
