import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import { PaymentDetail } from 'App/Models/Cart'
import { User } from 'App/Models/User'

export default class OrderDetail extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public total: number

  @column()
  public paymentId: number

  @hasOne(() => PaymentDetail)
  public paymentDetail: HasOne<typeof PaymentDetail>

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
