import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ProductDiscount } from 'App/Models/Shop'
import { StoreValidator, UpdateValidator } from 'App/Validators/Shop/ProductDiscount'

export default class ProductDiscountsController {
  public async index({}: HttpContextContract) {
    const discounts = await ProductDiscount.all()
    return discounts
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const discounts = await ProductDiscount.create(data)
    return discounts
  }

  public async show({ params }: HttpContextContract) {
    const discount = await ProductDiscount.findOrFail(params.id)
    return discount
  }

  public async update({ request, params }: HttpContextContract) {
    const data = await request.validate(UpdateValidator)
    const discount = await ProductDiscount.findOrFail(params.id)
    await discount.merge(data)
    await discount.save()
    return discount
  }

  public async destroy({ params }: HttpContextContract) {
    const discount = await ProductDiscount.findOrFail(params.id)
    await discount.delete()
    return discount
  }
}
