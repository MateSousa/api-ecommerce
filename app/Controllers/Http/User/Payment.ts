import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { User, Payment } from 'App/Models/User'
import { StoreValidator, UpdateValidator } from 'App/Validators/User/Payment'

export default class PaymentsController {
  public async index({ auth }: HttpContextContract) {
    const user = await User.findOrFail(auth.user!.id)
    const payments = await Payment.query().where('user_id', user.id)
    return payments
  }

  public async store({ request, auth }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const user = await User.findOrFail(auth.user!.id)
    const payment = await Payment.create({ ...data, userId: user.id })
    return payment
  }

  public async show({ params, auth }: HttpContextContract) {
    const user = await User.findOrFail(auth.user!.id)
    const payment = await Payment.findOrFail(params.id)
    if (payment.userId !== user.id) {
      return {
        error: {
          message: 'Unauthorized',
          code: 401,
        },
      }
    }
    return payment
  }

  public async update({ request, params, auth }: HttpContextContract) {
    const data = await request.validate(UpdateValidator)
    const user = await User.findOrFail(auth.user!.id)
    const payment = await Payment.findOrFail(params.id)
    if (payment.userId !== user.id) {
      return {
        error: {
          message: 'Unauthorized',
          code: 401,
        },
      }
    }
    await payment.merge(data)
    await payment.save()
    return payment
  }

  public async destroy({ params, auth }: HttpContextContract) {
    const user = await User.findOrFail(auth.user!.id)
    const payment = await Payment.findOrFail(params.id)
    if (payment.userId !== user.id) {
      return {
        error: {
          message: 'Unauthorized',
          code: 401,
        },
      }
    }
    await payment.delete()
    return {
      message: 'Payment deleted',
    }
  }
}
