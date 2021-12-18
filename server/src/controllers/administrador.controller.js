const Administrador = require("../models/administrador.model.js");

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Book
    const admi = new Administrador({
      id_persona: req.body.id_persona,
      codigo_admi: req.body.codigo_admi,
      created : new Date(),
      updated : new Date()
    });
  
    // Save Book in the database
    Administrador.create(admi, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Persona."
        });
      else res.send(data);
    });
  };

  exports.findAdmi = (req, res) => {
   // Verificar si el admi existe
    Administrador.findOne(req.params.id, (err, data) => {
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