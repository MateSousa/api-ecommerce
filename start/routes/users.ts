import Route from '@ioc:Adonis/Core/Route'

Route.post('/users/register', 'User/Register.store')
Route.get('/users/register/:key', 'User/Register.show')
Route.put('/users/register/:key', 'User/Register.update')

Route.post('/recoverypassword', 'User/ForgotPassword.store')
Route.put('/recoverypassword', 'User/ForgotPassword.update')

Route.get('/users', 'User/Main.show').middleware('auth')
Route.put('/users', 'User/Main.update').middleware('auth')
