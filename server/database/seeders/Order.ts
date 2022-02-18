import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { OrderFactory } from 'Database/factories/OrderFactory'

export default class OrderSeeder extends BaseSeeder {
  public async run() {
    await OrderFactory 
    .with('user', 10)
    .createMany(10)
  }
}
