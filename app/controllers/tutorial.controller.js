const db = require("../models")
const Tutorial = db.tutoriais
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  if (!req.body.titulo) {
    res.status(400).send({
      message: "Campo obrigatório não preenchido: Título."
    })
    return;
  }

  if (!req.body.descricao) {
    res.status(400).send({
      message: "Campo obrigatório não preenchido: Descrição."
    })
    return;
  }

  const tutorial = {
    titulo: req.body.titulo,
    descricao: req.body.descricao,
    publicado: req.body.publicado ? req.body.publicado : false
  }

  Tutorial.create(tutorial)
    .then(data => {
      res.send(data)
    })
    .catch(erro => {
      res.status(500).send({
        message: erro.message || "Erro ao criar o Tutorial."
      })
    })
}

exports.findAll = (req, res) => {
  const titulo = req.query.titulo;
  var condicao = titulo ? { titulo: { [Op.like]: `%${titulo}%` } } : null

  Tutorial.findAll({ where: condicao })
    .then(data => {
      res.send(data)
    })
    .catch(erro => {
      res.status(500).send({
        message: erro.message || "Erro ao recuperar o Tutorial"
      })
    })
}

exports.findOne = (req, res) => {
  const id = req.params.id

  Tutorial.findByPk(id)
    .then(data => {
      res.send(data)
    })
    .catch(erro => {
      res.status(500).send({
        message: "Erro ao recuperar o Tutorial com ID: " + id
      })
    })
}

exports.update = (req, res) => {
  const id = req.params.id

  if (id == null) {
    res.status(400).send({
      message: "ID para atualização não informado."
    })
    return;
  }

  Tutorial.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial atualizado com sucesso!"
        })
      } else {
        res.send({
          message: `Não foi possível atualizar o Tutorial de ID: ${id}. Talvez o Tutorial não tenha sido encontrado.`
        })
      }
    })
    .catch(erro => {
      res.status(500).send({
        message: "Erro ao atualizar o Tutorial de id: " + id
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id

  if (id == null) {
    res.status(400).send({
      message: "ID para exclusão não informado."
    })
    return;
  }

  Tutorial.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial deletado com sucesso!"
        })
      } else {
        res.send({
          message: `Não foi possível excluir o Tutorial de ID: ${id}. Talvez o Tutorial não tenha sido encontrado.`
        })
      }
    })
    .catch(erro => {
      res.status(500).send({
        message: "Não foi possível deletar o Tutorial de ID: " + id
      })
    })
}

exports.deleteAll = (req, res) => {
  Tutorial.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({
        message: `${nums} Tutorial(is) deletado(s) com sucesso!`
      })
    })
    .catch(erro => {
      res.status(500).send({
        message: erro.message || "Ocorreu um erro ao tentar deletar todos os Tutoriais."
      })
    })
}

exports.findAllPublished = (req, res) => {
  Tutorial.findAll({
    where: {
      publicado: true
    }
  })
    .then(data => {
      res.send(data)
    })
    .catch(erro => {
      res.status(500).send({
        message: erro.message || "Erro ao tentar encontrar os tutoriais publicados."
      })
    })
}
