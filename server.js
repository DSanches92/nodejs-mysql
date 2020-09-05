const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

var corsOptions = {
  origin: "http://localhost:8081"
}

app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const db = require("./app/models")
//Produção
//db.conexao.sync()
//Desenvolvimento
db.conexao.sync({ force: true }).then(() => {
  console.log("Tabelas recriadas.")
})

app.get("/", (req, res) => {
  res.json({ message: "Ola mundo! by BezKoder" })
})

require("./app/routes/tutorial.routes")(app)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}.`)
})
