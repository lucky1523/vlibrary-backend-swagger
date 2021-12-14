const sql = require("./db.js");

const Administrador =  function(administrador){
    this.id_admi=administrador.id_admi;
    this.id_persona=administrador.id_persona;
    this.codigo_admi=administrador.codigo_admi;
    this.created=administrador.created;
    this.updated=administrador.updated;
}; 

Administrador.create = (newAdmi, result) => {
    sql.query("INSERT INTO Administrador SET ?", newAdmi, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created admi: ", { id: res.insertId, ...newAdmi });
      result(null, { id: res.insertId, ...newAdmi });
    });
  };
  module.exports = Administrador;