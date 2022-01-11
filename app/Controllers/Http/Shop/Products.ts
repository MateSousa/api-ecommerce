import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Product, ProductInventory, ProductDiscount } from 'App/Models/Shop'
import { StoreValidator, UpdateValidator } from 'App/Validators/Shop/Product'

export default class ProductsController {
  public async index({}: HttpContextContract) {
    const products = await Product.all()
    return products
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const inventory = await ProductInventory.create({})
    const discount = await ProductDiscount.create({})
    const product = await Product.create({
      ...data,
      inventoryId: inventory.id,
      discountId: discount.id,
    })
    return product
  }

  public async show({ params }: HttpContextContract) {
    const product = await Product.findOrFail(params.id)
    return product
  }

  public async update({ request, params }: HttpContextContract) {
    const data = await request.validate(UpdateValidator)
    const product = await Product.findOrFail(params.id)
    await product.merge(data)
    await product.save()
    return product
  }

  public async destroy({ params }: HttpContextContract) {
    const product = await Product.findOrFail(params.id)
    await product.delete()
  }
}
