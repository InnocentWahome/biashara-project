import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Orders extends BaseSchema {
  protected tableName = 'orders'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('product_id').references('id').inTable('products').onDelete('CASCADE').notNullable().unsigned()
      table.string('product_name')
      table.string('user_id').references('id').inTable('users').onDelete('CASCADE').notNullable().unsigned()
      table.integer('cost')
      table.integer('quantity')
      table.boolean('admin_approval')
      table.boolean('dispatch_status')
      table.boolean('delivery_status')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
