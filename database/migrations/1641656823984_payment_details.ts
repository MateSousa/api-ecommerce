import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PaymentDetails extends BaseSchema {
  protected tableName = 'payment_details'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('order_id')
      table.integer('amount')
      table.string('provider')
      table.string('status')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
