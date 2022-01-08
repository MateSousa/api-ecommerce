import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
  protected tableName = 'products'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('SKU').notNullable()
      table.text('description').notNullable()
      table.decimal('price').notNullable()
      table
        .integer('category_id')
        .unsigned()
        .references('id')
        .inTable('product_categories')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table
        .integer('inventory_id')
        .unsigned()
        .references('id')
        .inTable('product_inventories')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('discount_id')
        .unsigned()
        .references('id')
        .inTable('product_discounts')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
