import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UserPayments extends BaseSchema {
  protected tableName = 'payments'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.enu('payment_type', ['credit_card', 'debit_card', 'paypal', 'bitcoin']).notNullable()
      table.string('card_number').notNullable()
      table.string('card_holder_name').notNullable()
      table.string('card_expiration_date').notNullable()
      table.string('card_cvv').notNullable()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
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
