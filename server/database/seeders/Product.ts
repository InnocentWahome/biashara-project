import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ProductFactory } from 'Database/factories/ProductFactory'

export default class ProductSeeder extends BaseSeeder {
  public async run() {
    await ProductFactory.createMany(10)
  }
}
