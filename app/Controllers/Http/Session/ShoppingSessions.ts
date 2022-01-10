import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ShoppingSession } from 'App/Models/Session'

export default class ShoppingSessionsController {
  public async index({}: HttpContextContract) {
    const shoppingSessions = await ShoppingSession.all()
    return shoppingSessions
  }

  public async show({ params }: HttpContextContract) {
    const shoppingSession = await ShoppingSession.findOrFail(params.id)
    return shoppingSession
  }
}
