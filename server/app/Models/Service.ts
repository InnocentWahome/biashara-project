import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ServiceRequest extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public category: string

  @column()
  public description: string

  @column()
  public userId: number

  @column()
  public date: Date

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
