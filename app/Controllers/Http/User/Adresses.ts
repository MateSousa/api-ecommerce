import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { StoreValidator } from 'App/Validators/User/Adress'

export default class Adresses {

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
