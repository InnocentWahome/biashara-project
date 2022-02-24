import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class WorkLogs extends BaseSchema {
  protected tableName = 'work_logs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('user_id')
      table.string('user_email')
      table.string('description')
      table.string('date')
      table.string('day')
      table.integer('hours')
      // table.integer('start')
      // table.integer('stop')
      table.boolean('approval')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

