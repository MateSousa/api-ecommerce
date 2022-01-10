import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { StoreValidator } from 'App/Validators/Auth'
import { ShoppingSession } from 'App/Models/Session'

export default class Main {
  public async store({ request, auth }: HttpContextContract) {
    const { email, password } = await request.validate(StoreValidator)
    const token = await auth.attempt(email, password, {
      expiresIn: '30 days',
    })
    const user = auth.user!.id
    await ShoppingSession.create({
      userId: user,
    })

    return { token }
  }

  public async destroy({ auth }: HttpContextContract) {
    await ShoppingSession.query().where('userId', auth.user!.id).delete()
    await auth.logout()
    return {
      message: 'Successfully logged out',
    }
  }
}
