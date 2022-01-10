import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import { ShoppingSession } from 'App/Models/Session'
import { Product } from 'App/Models/Shop'

export default class CartItem extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public sessionId: number

  @column()
  public productId: number

  @column()
  public quantity: number

  @hasOne(() => ShoppingSession)
  public session: HasOne<typeof ShoppingSession>

  @hasMany(() => Product)
  public products: HasMany<typeof Product>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
