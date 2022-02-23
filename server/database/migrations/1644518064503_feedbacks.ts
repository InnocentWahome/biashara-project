import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Feedback extends BaseSchema {
  protected tableName = 'feedbacks'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('product_id')
      table.string('product_name')
      table.string('user_id')
      table.string('user_email')
      table.string('date')
      table.string('description')
      table.integer('rate')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
