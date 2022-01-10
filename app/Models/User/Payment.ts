import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, beforeSave } from '@ioc:Adonis/Lucid/Orm'
import { User } from 'App/Models/User'
import { PaymentType } from 'App/Utils'
import Encryption from '@ioc:Adonis/Core/Encryption'

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

  @beforeSave()
  public static async encryptCardNumber(payment: Payment) {
    const { cardNumber } = payment
    if (cardNumber) {
      payment.cardNumber = Encryption.encrypt(cardNumber)
    }
  }

  @beforeSave()
  public static async encryptCardCvv(payment: Payment) {
    const { cardCvv } = payment
    if (cardCvv) {
      payment.cardCvv = Encryption.encrypt(cardCvv)
    }
  }

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
