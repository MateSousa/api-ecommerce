import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { paymentsType } from 'App/Utils'

export default class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    paymentType: schema.enum(paymentsType),
    cardNumber: schema.string({ trim: true }, [rules.required()]),
    cardHolderName: schema.string({ trim: true }, [rules.required()]),
    cardExpirationDate: schema.string({ trim: true }, [rules.required()]),
    cardCvv: schema.string({ trim: true }, [rules.required()]),
  })

  public messages = {}
}
