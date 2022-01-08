import Route from '@ioc:Adonis/Core/Route'

Route.post('/payments', 'User/Payment.store').middleware('auth')
Route.get('/payments', 'User/Payment.index').middleware('auth')
Route.get('/payments/:id', 'User/Payment.show').middleware('auth')
Route.put('/payments/:id', 'User/Payment.update').middleware('auth')
Route.delete('/payments/:id', 'User/Payment.destroy').middleware('auth')
