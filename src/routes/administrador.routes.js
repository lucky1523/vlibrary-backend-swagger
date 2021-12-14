module.exports = app => {
    const administrador = require("../controllers/administrador.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Book ...
    router.post("/create", administrador.create);
  
    app.use('/api/administrador', router);
  };