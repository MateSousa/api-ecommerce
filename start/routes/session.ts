import Route from '@ioc:Adonis/Core/Route'

Route.get('/shopping-sessions', 'Session/ShoppingSessions.index')
Route.get('/shopping-sessions/:id', 'Session/ShoppingSessions.show')

Route.get('/cart-items', 'Session/CartItems.index').middleware('auth')
Route.get('/cart-items/:id', 'Session/CartItems.show')
Route.post('/cart-items', 'Session/CartItems.store').middleware('auth')
Route.put('/cart-items/:id', 'Session/CartItems.update')
Route.delete('/cart-items/:id', 'Session/CartItems.destroy')
