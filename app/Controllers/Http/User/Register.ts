import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { User, Key } from 'App/Models/User'
import { StoreValidator, UpdateValidator } from 'App/Validators/User/Register'
import Mail from '@ioc:Adonis/Addons/Mail'
import faker from 'faker'

export default class Register {
  public async store({ request }: HttpContextContract) {
    const { email, redirectUrl } = await request.validate(StoreValidator)
    const user = new User()

    user.email = email

    await user.save()

    const key = faker.datatype.uuid() + new Date().getTime() + user.id

    await user.related('keys').create({ key })

    const link = `${redirectUrl.replace(/\/$/, '')}/${key}`

    await Mail.send((message) => {
      message.to(email)
      message.from('contato@ecommerce.com', 'E-commerce')
      message.subject('Criação de conta')
      message.htmlView('emails/verify-email', { link })
    })
  }

  public async show({ params }: HttpContextContract) {
    const userKey = await Key.findByOrFail('key', params.key)

    await userKey.load('user')

    return userKey.user
  }

  public async update({ request, response }: HttpContextContract) {
    const { key, name, lastName, phone, password } = await request.validate(UpdateValidator)

    const userKey = await Key.findByOrFail('key', key)

    await userKey.load('user')

    await userKey.user.merge({ name, lastName, phone, password })

    await userKey.user.save()

    await userKey.delete()

    return response.ok({ message: 'ok' })
  }
}
