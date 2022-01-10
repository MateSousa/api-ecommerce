import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ShoppingSession, CartItem } from 'App/Models/Session'
import { Product } from 'App/Models/Shop'
import { StoreValidator, UpdateValidator } from 'App/Validators/Session/CartItem'

export default class CartItemsController {
  public async index({ auth }: HttpContextContract) {
    const user = auth.user!.id
    const session = await ShoppingSession.query().where('userId', user).firstOrFail()
    const cartItems = await CartItem.query().where('sessionId', session.id)
    return cartItems
  }

  public async store({ request, auth }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const user = auth.user!.id
    const session = await ShoppingSession.query().where('userId', user).firstOrFail()
    const product = await Product.findOrFail(data.productId)
    const cartItem = await CartItem.create({
      sessionId: session.id,
      productId: product.id,
      quantity: data.quantity,
    })
    return cartItem
  }

  public async show({ params }: HttpContextContract) {
    const cartItem = await CartItem.findOrFail(params.id)
    return cartItem
  }

  public async update({ params, request }: HttpContextContract) {
    const data = await request.validate(UpdateValidator)
    const cartItem = await CartItem.findOrFail(params.id)
    cartItem.quantity = data.quantity
    await cartItem.merge(data)
    await cartItem.save()
    return cartItem
  }

  public async destroy({ params }: HttpContextContract) {
    const cartItem = await CartItem.findOrFail(params.id)
    await cartItem.delete()
  }
}
