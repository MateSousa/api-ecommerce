import Route from '@ioc:Adonis/Core/Route'

import './auth'
import './users'
import './adress'
import './payments'
import './shops'

Route.get('/', async () => {
  return { hello: 'world' }
})
