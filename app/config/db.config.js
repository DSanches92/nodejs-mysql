module.exports = {
  HOST: "localhost",
  USER: "danilo",
  PASSWD: "123@vai",
  DB: "nodejs_mysql",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 300000,
    idle: 10000
  }
}
