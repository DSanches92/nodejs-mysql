const dbConfig = require("../config/db.config.js")

const Sequelize = require("sequelize")
const conexao = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
})

const db = {}

db.Sequelize = Sequelize;
db.conexao = conexao;

db.tutoriais = require("./tutorial.model.js")(conexao, Sequelize)

module.exports = db
