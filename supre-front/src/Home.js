import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const [clientes, setClientes] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:8080").then((res) => {
      setClientes(res.data);
    });
  });

  const editById = (id) => {
    navigate(`/form/${id}`);
  };

  const deleteById = (id) => {
    if (window.confirm("¿Desea eliminar este registro?")) {
      axios.delete(`http://localhost:8080/${id}`).then((res) => {
        if (res.status === 200) {
          setClientes((clientes) => {
            return clientes.filter((cliente) => cliente.id !== id);
          });
        }
      });
    }
  };

  return (
    <div className="card">
      <div className="container pt-5">
        <div className="d-flex justify-content-between align-items-center">
          <h1>Lista de clientes</h1>
          <Link to="/form" className="btn btn-primary">
            Agregar
          </Link>
        </div>
        <table className="table table-bordered mt-5">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>No. Identificacion</th>
              <th>Fecha de nacimiento</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => {
              return (
                <tr key={cliente.id}>
                  <td>{cliente.name}</td>
                  <td>{cliente.Ndoc}</td>
                  <td>{cliente.Fnac}</td>
                  <td className="text-center">
                    <i
                      style={{ cursor: "pointer" }}
                      className="bx bx-trash text-danger fs-4"
                      onClick={() => deleteById(cliente.id)}
                    ></i>
                    <i
                      style={{ cursor: "pointer" }}
                      className="bx bx-edit-alt text-primary fs-4"
                      onClick={() => editById(cliente.id)}
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Home;
