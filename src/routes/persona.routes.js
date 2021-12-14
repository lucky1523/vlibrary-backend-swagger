module.exports = app => {
    const persona = require("../controllers/persona.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Book ...
    router.post("/create", persona.create);
  
    app.use('/api/personas', router);
  };