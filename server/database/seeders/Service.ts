import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ServiceFactory } from 'Database/factories/ServiceFactory'

export default class ServiceSeeder extends BaseSeeder {
  public async run() {
    await ServiceFactory.createMany(10)
  }
}
