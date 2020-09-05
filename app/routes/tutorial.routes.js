module.exports = app => {

  const tutoriais = require("../controllers/tutorial.controller.js")
  var router = require("express").Router();


  router.post("/", tutoriais.create)

  router.get("/", tutoriais.findAll)

  router.get("/publicados", tutoriais.findAllPublished)

  router.get("/:id", tutoriais.findOne)

  router.put("/:id", tutoriais.update)

  router.delete("/:id", tutoriais.delete)

  router.delete("/", tutoriais.deleteAll)


  app.use('/api/tutoriais', router)
}
