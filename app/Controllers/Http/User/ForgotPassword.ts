import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { UpdateValidator, StoreValidator } from 'App/Validators/User/ForgotPassword'
import { User, Key } from 'App/Models/User'
import faker from 'faker'

export default class ForgotPassword {


  public async store({ request }: HttpContextContract) {
    const { email, password } = await request.validate(StoreValidator)

    const user = await User.findBy('email', email)
    if (!user) {
      throw new Error('User not found')
    }

    const key = faker.datatype.uuid() + user.id

    await user.related('keys').create({ key })

    const link = `${redirectUrl.replace(/\/$/, '')}/${key}`

    // await Mail.send((message) => {
    //   message.to(email)
    //   message.from('contato@facebook.com', 'Facebook')
    //   message.subject('Recuperação de senha')
    //   message.htmlView('mails/forgot-password', { link: link })
    // })
  }

  public async update({}: HttpContextContract) {}

}
