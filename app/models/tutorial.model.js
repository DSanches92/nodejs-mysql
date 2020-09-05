module.exports = (conexao, Sequelize) => {
  const Tutorial = conexao.define("tutorial", {
    titulo: {
      type: Sequelize.STRING
    },
    descricao: {
      type: Sequelize.STRING
    },
    publicado: {
      type: Sequelize.BOOLEAN
    }
  })

  return Tutorial;
}
