import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Orders extends BaseSchema {
  protected tableName = 'orders'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('productId')
      table.string('productName')
      table.string('userId')
      table.integer('cost')
      table.integer('quantity')
      table.boolean('adminApproval')
      table.boolean('dispatchStatus')
      table.boolean('deliveryStatus')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
