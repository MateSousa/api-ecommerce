import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { PaymentDetail } from 'App/Models/Cart'

export default class PaymentDetailsController {
  public async index({}: HttpContextContract) {
    const paymentDetails = await PaymentDetail.all()
    return paymentDetails
  }

  public async show({ params }: HttpContextContract) {
    const paymentDetail = await PaymentDetail.findOrFail(params.id)
    return paymentDetail
  }
}
