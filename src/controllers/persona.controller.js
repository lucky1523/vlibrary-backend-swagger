const Persona = require("../models/persona.model.js");

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Book
    const persona = new Persona({
      nombre: req.body.nombre,
      profesion: req.body.profesion,
      id_usuario: req.body.id_usuario,
      created : new Date(),
      updated : new Date()
    });
  
    // Save Book in the database
    Persona.create(persona, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Persona."
        });
      else res.send(data);
    });
  };

  exports.findAll = (req, res) => {
    Persona.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Personas and users."
        });
      else res.send(data);
    });
  };

  exports.delete = (req, res) => {
    Persona.remove(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Persona with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Persona with id " + req.params.id
          });
        }
      } else res.send({ message: `Persona was deleted successfully!` });
    });
  };