exports.up = function (knex) {
  return knex.schema.createTable("transactions", (tbl) => {
    tbl.increments();
    tbl.string("account_number").notNullable();
    tbl.date("transaction_date").notNullable();
    tbl.float("transaction_amount").notNullable();
    tbl.string("transaction_type").notNullable();
    tbl.string("transaction_description").notNullable();
    tbl.float("balance").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("transactions");
};
