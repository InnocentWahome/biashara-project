import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Orders extends BaseSchema {
  protected tableName = 'orders'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('product_id')
      table.string('product_name')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.string('user_email')
      table.integer('cost')
      table.integer('quantity')
      table.boolean('payment_status').defaultTo(false)
      table.boolean('dispatch_status').defaultTo(false)
      table.boolean('delivery_status').defaultTo(false)
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
