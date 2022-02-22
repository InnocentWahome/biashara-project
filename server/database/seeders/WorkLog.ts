import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { WorkLogFactory } from 'Database/factories/WorkLogFactory'

export default class WorkLogSeeder extends BaseSeeder {
  public async run() {
    await WorkLogFactory
    .with('user')
    .createMany(10)
  }
}
