import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Product from 'App/Models/Product'
import User from 'App/Models/User'


export default class Feedback extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public productId: number

  @column()
  public productName: string

  @column()
  public userId: number

  @column()
  public userEmail: string

  @column()
  public description: string

  @column()
  public date: string

  @column()
  public rate: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Product)
  public product: BelongsTo<typeof Product>

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
}
