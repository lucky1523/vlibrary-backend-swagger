const Usuario = require("../models/usuario.model.js");

// Create and Save a new Usuario
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Usuario
    const usuario = new Usuario({
      nombre_usuario: req.body.nombre_usuario,
      password: req.body.password,
      correo : req.body.correo,
      ultimo_inicio : new Date(),
      created : new Date(),
      updated : new Date()
    });
  
    // Save Usuario in the database
    Usuario.create(usuario, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Usuario."
        });
      else res.send(data);
    });
};

// Login Usuario
exports.login = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
   // Verificar si el usuario existe
    Usuario.findOne({
      nombre_usuario: req.body.nombre_usuario,
      password: req.body.password
    }, (err, data) => {
      if (err){
        res.status(401).send({
          message:
            err.message || "Some error occurred while retrieving Usuario."
        });
      }
        
      else res.send(data);
    }
    );
};

exports.delete = (req, res) => {
  Usuario.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Usuario with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Usuario with id " + req.params.id
        });
      }
    } else res.send({ message: `Usuario was deleted successfully!` });
  });
};

// Retrieve all books from the database 
exports.findAll = (req, res) => {
  Usuario.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving usuarios."
      });
    else res.send(data);
  });
};


