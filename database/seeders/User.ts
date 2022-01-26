import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { User } from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        email: 'mate@me.com',
        password: 'secret',
        name: 'Mate',
        lastName: 'Sousa',
        phone: '+5511999999999',
        role: 'admin',
      },
    ])
  }
}
