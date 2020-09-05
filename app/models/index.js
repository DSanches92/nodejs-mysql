const dbConfig = require("../config/db.config.js")

const Sequelize = require("sequelize")
const conexao = new Sequelize(dbConfig)

const db = {}

db.Sequelize = Sequelize;
db.conexao = conexao;

db.tutoriais = require("./tutorial.model.js")(conexao, Sequelize)

module.exports = db
