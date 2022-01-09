import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import { OrderDetail } from 'App/Models/Cart'
import { Product } from 'App/Models/Shop'

export default class OrderItem extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public orderId: number

  @column()
  public productId: number

  @column()
  public quantity: number

  @hasOne(() => Product)
  public product: HasOne<typeof Product>

  @hasOne(() => OrderDetail)
  public orderDetail: HasOne<typeof OrderDetail>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
