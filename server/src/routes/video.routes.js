module.exports = app => {
    const video = require("../controllers/video.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Book ...
    router.post("/create", video.create);
  
    router.get("/findAll", video.findAll);



    app.use('/api/videos', router);
  };