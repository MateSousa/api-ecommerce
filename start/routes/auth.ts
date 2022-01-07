import Route from '@ioc:Adonis/Core/Route'

Route.post('/auth/login', 'Auth/Main.store')
Route.delete('/auth/logout', 'Auth/Main.destroy')
