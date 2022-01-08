import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import { ProductCategory, ProductDiscount, ProductInventory } from 'App/Models/Shop'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public SKU: string

  @column()
  public description: string

  @column()
  public price: number

  @column()
  public categoryId: number

  @column()
  public discountId: number

  @column()
  public inventoryId: number

  @hasMany(() => ProductCategory)
  public categories: HasMany<typeof ProductCategory>

  @hasOne(() => ProductDiscount)
  public discount: HasOne<typeof ProductDiscount>

  @hasOne(() => ProductInventory)
  public inventory: HasOne<typeof ProductInventory>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
