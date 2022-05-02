const connection = require("../services/db");
const cliente = {};

cliente.create = (clienteReq, res) => {
  const body = clienteReq.body;
  connection.query("insert into clientes set ?", body, (err, result) => {
    if (err) {
      console.log(err);
      res.jsons(err);
      return;
    }
    res.status(200).send({ id: result.insertId, ...body });
  });
};

cliente.findById = (req, res) => {
  const id = req.params.id;
  connection.query(`select * from clientes where id = ${id}`, (err, result) => {
    if (err) {
      console.log(err);
      res.json(err);
      return;
    }
    res.json(result[0]);
  });
};

cliente.getAll = (req, res) => {
  connection.query("select * from clientes", (err, result) => {
    if (err) {
      console.log(err);
      res.json(err);
      return;
    }
    res.json(result);
  });
};

cliente.update = (req, res) => {
  const body = req.body;
  connection.query(
    `update clientes set 
    name = "${body.name}", 
    Tdoc = "${body.Tdoc}",
    Ndoc = "${body.Ndoc}",
    email = "${body.email}",
    Fnac = "${body.Fnac}",
    address = "${body.address}",
    age = ${body.age}
    where id = ${body.id}`,
    (err, result) => {
      if (err) {
        console.log(err);
        res.json(err);
        return;
      }
      res.status(200).json(body);
    }
  );
};

cliente.deleteById = (req, res) => {
  const id = req.params.id;
  connection.query(`delete from clientes where id = ${id}`, (err, result) => {
    if (err) {
      console.log(err);
      res.json(err);
      return;
    }
    res.status(200).send();
  });
} 

module.exports = cliente;
