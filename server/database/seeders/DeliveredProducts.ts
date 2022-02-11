import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { DeliveredProductFactory } from 'Database/factories/DeliveredProductFactory'

export default class DeliveredProductSeeder extends BaseSeeder {
  public async run() {
    await DeliveredProductFactory.createMany(10)
  }
}
