import Route from '@ioc:Adonis/Core/Route'

import './auth'
import './users'
import './adress'

Route.get('/', async () => {
  return { hello: 'world' }
})
