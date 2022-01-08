import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ProductCategory } from 'App/Models/Shop'
import { StoreValidator, UpdateValidator } from 'App/Validators/Shop/ProductCategory'

export default class ProductCategoriesController {
  public async index({}: HttpContextContract) {
    const productCategories = await ProductCategory.all()
    return productCategories
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const productCategory = await ProductCategory.create(data)
    return productCategory
  }

  public async show({ params }: HttpContextContract) {
    const productCategory = await ProductCategory.findOrFail(params.id)
    return productCategory
  }

  public async update({ request, params }: HttpContextContract) {
    const data = await request.validate(UpdateValidator)
    const productCategory = await ProductCategory.findOrFail(params.id)
    await productCategory.merge(data)
    await productCategory.save()
    return productCategory
  }

  public async destroy({ params }: HttpContextContract) {
    const product = await ProductCategory.findOrFail(params.id)
    product.delete()
  }
}
