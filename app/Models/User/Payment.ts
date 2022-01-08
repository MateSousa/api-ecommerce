import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { User } from 'App/Models/User'
import { PaymentType } from 'App/Utils'

export default class Payment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public paymentType: PaymentType

  @column()
  public cardNumber: string

  @column()
  public cardHolderName: string

  @column()
  public cardExpirationDate: string

  @column()
  public cardCvv: string

  @column()
  public userId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
