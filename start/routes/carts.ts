import Route from '@ioc:Adonis/Core/Route'

Route.get('/orderdetails', 'Cart/OrderDetails.index')
Route.post('/orderdetails', 'Cart/OrderDetails.store').middleware(['auth'])
Route.get('/orderdetails/:id', 'Cart/OrderDetails.show')
Route.put('/orderdetails/:id', 'Cart/OrderDetails.update')
Route.delete('/orderdetails/:id', 'Cart/OrderDetails.destroy')

Route.get('/orderitems', 'Cart/OrderItems.index')
Route.post('/orderitems', 'Cart/OrderItems.store')
Route.get('/orderitems/:id', 'Cart/OrderItems.show')
Route.put('/orderitems/:id', 'Cart/OrderItems.update')
Route.delete('/orderitems/:id', 'Cart/OrderItems.destroy')

Route.get('/paymentdetails', 'Cart/PaymentDetails.index')
Route.get('/paymentdetails/:id', 'Cart/PaymentDetails.show')
