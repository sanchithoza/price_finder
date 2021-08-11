exports.up = function(knex) {
    return knex.schema.createTable('tbl_products', (table) => {
        table.increments('id').primary()
        table.integer('organization_id', 11).unsigned().references('id').inTable('tbl_organization')
        table.string('category').notNullable()
        table.string('sub_category')
        table.string('model_name')
        table.string('model_number')
        table.string('company_name')
        table.string('puechase_price')
        table.string('wholesale_price')
        table.string('retail_price')
        table.string('discription')
        table.boolean('is_active').defaultTo(1)
        table.timestamp('created_at').defaultTo(knex.fn.now())
    }).then(() => {
        console.log(`tbl_products created successfully . .`);
    }).catch((error) => {
        console.log(`Error creating tbl_products : ${error}`);
        throw error
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tbl_products')
};