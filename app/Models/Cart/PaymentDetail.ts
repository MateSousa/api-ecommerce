import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import { OrderDetail } from 'App/Models/Cart'

export default class PaymentDetail extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public orderId: number

  @column()
  public amount: number

  @column()
  public provider: string

  @column()
  public status: string

  @belongsTo(() => OrderDetail)
  public orderDetail: BelongsTo<typeof OrderDetail>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
