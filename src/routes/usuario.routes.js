module.exports = app => {
    const usuarios = require("../controllers/usuario.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Usuario ...
    router.post("/register", usuarios.create);

    // Login Usuario ...
    router.post("/login", usuarios.login);

    router.delete("/:id", usuarios.delete);
    
    app.use('/api/user', router);
  };