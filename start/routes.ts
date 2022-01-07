import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('/users/register', 'User/Register.store')
Route.get('/users/register/:key', 'User/Register.show')
Route.put('/users/register/:key', 'User/Register.update')
