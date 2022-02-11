import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ServiceRequests extends BaseSchema {
  protected tableName = 'service_requests'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('description')
      table.integer('user_id')
      table.integer('date')
      table.enum('category', ['softwareUpdate', 'serviceRequest', 'maintenance']).defaultTo('maintenance')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
