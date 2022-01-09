import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    quantity: schema.number(),
    productId: schema.number(),
    orderId: schema.number(),
  })

  public messages = {}
}
