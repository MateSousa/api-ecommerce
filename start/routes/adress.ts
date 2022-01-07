import Route from '@ioc:Adonis/Core/Route'

Route.post('/adress/register', 'User/Adresses.store').middleware(['auth'])
Route.get('/adress/register/:id', 'User/Adresses.show').middleware(['auth'])
Route.put('/adress/register/:id', 'User/Adresses.update').middleware(['auth'])
Route.delete('/adress/register/:id', 'User/Adresses.destroy').middleware(['auth'])
