import Route from '@ioc:Adonis/Core/Route'

Route.post('/products', 'Shop/Products.store')
Route.get('/products', 'Shop/Products.index')
Route.get('/products/:id', 'Shop/Products.show')
Route.put('/products/:id', 'Shop/Products.update')
Route.delete('/products/:id', 'Shop/Products.destroy')

Route.post('/product-categories', 'Shop/ProductCategories.store')
Route.get('/product-categories', 'Shop/ProductCategories.index')
Route.get('/product-categories/:id', 'Shop/ProductCategories.show')
Route.put('/product-categories/:id', 'Shop/ProductCategories.update')
Route.delete('/product-categories/:id', 'Shop/ProductCategories.destroy')

Route.post('product-discounts', 'Shop/ProductDiscounts.store')
Route.get('product-discounts', 'Shop/ProductDiscounts.index')
Route.get('product-discounts/:id', 'Shop/ProductDiscounts.show')
Route.put('product-discounts/:id', 'Shop/ProductDiscounts.update')
Route.delete('product-discounts/:id', 'Shop/ProductDiscounts.destroy')

Route.get('/product-inventories', 'Shop/ProductInventories.index')
Route.get('/product-inventories/:id', 'Shop/ProductInventories.show')
Route.put('/product-inventories/:id', 'Shop/ProductInventories.update')
