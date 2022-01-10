import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CartItems extends BaseSchema {
  protected tableName = 'cart_items'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('session_id')
        .unsigned()
        .references('id')
        .inTable('shopping_sessions')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table
        .integer('product_id')
        .unsigned()
        .references('id')
        .inTable('products')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.integer('quantity')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
