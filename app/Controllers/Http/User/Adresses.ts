import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { StoreValidator, UpdateValidator } from 'App/Validators/User/Adress'
import { Adress, User } from 'App/Models/User'

export default class Adresses {
  public async store({ request, auth }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const user = await User.findOrFail(auth.user!.id)
    const adress = await Adress.create({ ...data, userId: user.id })
    return adress
  }

  public async show({ params }: HttpContextContract) {
    const adress = await Adress.findOrFail(params.id)
    return adress
  }

  public async update({ params, auth, request, response }: HttpContextContract) {
    const adress = await Adress.findOrFail(params.id)
    const data = await request.validate(UpdateValidator)

    if (auth.user!.id !== adress.userId) {
      return response.unauthorized()
    } else {
      await adress.merge(data)
      await adress.save()
      return adress
    }
  }

  public async destroy({ params, auth, response }: HttpContextContract) {
    const adress = await Adress.findOrFail(params.id)

    if (auth.user!.id !== adress.userId) {
      return response.unauthorized()
    } else {
      await adress.delete()
    }
  }
}
