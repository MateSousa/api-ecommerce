import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import { Adress, Payment, Key } from 'App/Models/User'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken?: string

  @column()
  public name: string

  @column()
  public lastName: string

  @column()
  public phone: string

  @hasMany(() => Adress)
  public adress: HasMany<typeof Adress>

  @hasMany(() => Payment)
  public payments: HasMany<typeof Payment>

  @hasMany(() => Key)
  public keys: HasMany<typeof Key>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
