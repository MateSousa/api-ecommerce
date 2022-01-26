import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProductInventories extends BaseSchema {
  protected tableName = 'product_inventories'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('quantity').defaultTo(1)
      table.integer('product_id')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
