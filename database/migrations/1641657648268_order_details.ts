import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class OrderDetails extends BaseSchema {
  protected tableName = 'order_details'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.decimal('total')
      table
        .integer('payment_id')
        .unsigned()
        .references('id')
        .inTable('payment_details')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
