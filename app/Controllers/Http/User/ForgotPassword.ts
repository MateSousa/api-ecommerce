import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { UpdateValidator, StoreValidator } from 'App/Validators/User/ForgotPassword'
import { User, Key } from 'App/Models/User'
import faker from 'faker'
import Mail from '@ioc:Adonis/Addons/Mail'

export default class ForgotPassword {
  public async store({ request }: HttpContextContract) {
    const { email, redirectUrl } = await request.validate(StoreValidator)

    const user = await User.findBy('email', email)
    if (!user) {
      throw new Error('User not found')
    }

    const key = faker.datatype.uuid() + user.id

    await user.related('keys').create({ key })

    const link = `${redirectUrl.replace(/\/$/, '')}/${key}`

    await Mail.send((message) => {
      message.to(email)
      message.from('contato@facebook.com', 'Facebook')
      message.subject('Recuperação de senha')
      message.htmlView('emails/forgot-password', { link: link })
    })
  }

  public async update({ request, response }: HttpContextContract) {
    const { key, password } = await request.validate(UpdateValidator)

    const userKey = await Key.findByOrFail('key', key)
    const user = await User.findOrFail(userKey.userId)

    user.password = password

    await user.save()

    await userKey.delete()

    return response.send({ message: 'Password changed successfully' })
  }
}
