import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ProductInventory } from 'App/Models/Shop'
import { StoreValidator, UpdateValidator } from 'App/Validators/Shop/ProductInventory'

export default class ProductInventoriesController {
  public async index({}: HttpContextContract) {
    const inventory = await ProductInventory.all()
    return inventory
  }

  public async show({ params }: HttpContextContract) {
    const inventory = await ProductInventory.findOrFail(params.id)
    return inventory
  }

  public async update({ request, params }: HttpContextContract) {
    const data = await request.validate(UpdateValidator)
    const inventory = await ProductInventory.findOrFail(params.id)
    await inventory.merge(data)
    await inventory.save()
    return inventory
  }
}
