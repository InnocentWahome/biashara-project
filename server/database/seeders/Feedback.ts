import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { FeedbackFactory } from 'Database/factories/FeedbackFactory'

export default class FeedbackSeeder extends BaseSeeder {
  public async run() {
    await FeedbackFactory.createMany(10)
  }
}
