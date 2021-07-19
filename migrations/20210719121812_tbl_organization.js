exports.up = function(knex) {
    return knex.schema.createTable('tbl_organization', (table) => {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('alias')
        table.string('address')
        table.string('city')
        table.string('state')
        table.string('country')
        table.string('mobile').notNullable()
        table.string('email')
        table.string('wesite')
        table.string('gst')
        table.string('pan')
        table.string('bank_name')
        table.string('bank_account_number')
        table.string('ifsc_code')
        table.boolean('is_active').defaultTo(1)
        table.timestamp('created_at').defaultTo(knex.fn.now());
    }).then(() => {
        console.log(`tbl_organization created successfully . .`);
    }).catch((error) => {
        console.log(`Error creating tbl_organizarion : ${error}`);
        throw error
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tbl_organization')
};