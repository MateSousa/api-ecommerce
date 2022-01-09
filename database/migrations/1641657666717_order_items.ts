import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class OrderItems extends BaseSchema {
  protected tableName = 'order_items'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('order_id')
        .unsigned()
        .references('id')
        .inTable('order_details')
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
