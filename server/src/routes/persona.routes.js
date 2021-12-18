module.exports = app => {
    const persona = require("../controllers/persona.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Book ...
    router.post("/create", persona.create);
  
    router.get("/findAll", persona.findAll);

    router.delete("/:id", persona.delete);

    app.use('/api/personas', router);
  };