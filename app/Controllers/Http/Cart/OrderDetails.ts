import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { OrderDetail, PaymentDetail } from 'App/Models/Cart'
import { User } from 'App/Models/User'
import { UpdateValidator, StoreValidator } from 'App/Validators/Cart/OrderDetails'

export default class OrdemDetailsController {
  public async index({}: HttpContextContract) {
    const orderDetails = await OrderDetail.all()
    return orderDetails
  }

  public async store({ request, auth }: HttpContextContract) {
    const { total } = await request.validate(StoreValidator)
    const user = await User.findOrFail(auth.user!.id)
    const payment = await PaymentDetail.create({
      amount: total,
    })
    const orderDetail = await OrderDetail.create({
      total,
      userId: user.id,
      paymentId: payment.id,
    })
    return orderDetail
  }

  public async show({ params }: HttpContextContract) {
    const orderDetail = await OrderDetail.findOrFail(params.id)
    return orderDetail
  }

  public async update({ request, params }: HttpContextContract) {
    const orderDetail = await OrderDetail.findOrFail(params.id)
    const data = await request.validate(UpdateValidator)
    orderDetail.merge(data)
    await orderDetail.save()
    return orderDetail
  }

  public async destroy({ params }: HttpContextContract) {
    const orderDetail = await OrderDetail.findOrFail(params.id)
    await orderDetail.delete()
  }
}
