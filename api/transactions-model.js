const knex = require("knex");
const config = require("../knexfile");
const db = knex(config.development);

module.exports = {
  getAll,
  getByDate,
};

function getAll() {
  return db("transactions");
}

function getByDate(date) {
  return db("transactions").where({ transaction_date: date });
}
