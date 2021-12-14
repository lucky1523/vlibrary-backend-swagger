const sql = require("./db.js");

const Persona =  function(persona){
    this.id_persona=persona.id_persona;
    this.id_usuario=persona.id_usuario;
    this.nombre=persona.nombre;
    this.profesion=persona.profesion;
    this.created=persona.created;
    this.updated=persona.updated;
}; 

Persona.create = (newPersona, result) => {
    sql.query("INSERT INTO Persona SET ?", newPersona, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created persona: ", { id: res.insertId, ...newPersona });
      result(null, { id: res.insertId, ...newPersona });
    });
  };
  module.exports = Persona;