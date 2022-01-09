import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { OrderItem, OrderDetail } from 'App/Models/Cart'
import { Product } from 'App/Models/Shop'
import { UpdateValidator, StoreValidator } from 'App/Validators/Cart/OrderItems'

export default class OrdemItemsController {
  public async index({ }: HttpContextContract) {
    const orderItems = await OrderItem.all()
    return orderItems
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const product = await Product.findOrFail(data.productId)
    const orderDetails = await OrderDetail.findOrFail(data.orderId)
    const orderItem = await OrderItem.create({
      ...data,
      productId: product.id,
      orderId: orderDetails.id,
    })
    return orderItem
  }

  public async show({ params }: HttpContextContract) {
    const orderItem = await OrderItem.findOrFail(params.id)
    return orderItem
  }

  public async update({ params, request }: HttpContextContract) {
    const orderItem = await OrderItem.findOrFail(params.id)
    const data = await request.validate(UpdateValidator)
    orderItem.merge(data)
    await orderItem.save()
    return orderItem
  }

  public async destroy({ params }: HttpContextContract) {
    const orderItem = await OrderItem.findOrFail(params.id)
    await orderItem.delete()
  }
}
