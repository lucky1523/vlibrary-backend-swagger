const Video = require("../models/video.model.js");

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Book
    const video = new Video({
      duracion: req.body.duracion,
      enlace: req.body.enlace,
      calidad: req.body.calidad,
      miniatura: req.body.miniatura,
      created : new Date(),
      updated : new Date()
      
    });
  
    // Save Book in the database
    Video.create(video, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Video."
        });
      else res.send(data);
    });
  };

  exports.findAll = (req, res) => {
    Video.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Videos."
        });
      else res.send(data);
    });
  };