import { Formik, Form, Field } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Form.css";
import axios from "axios";
import { useEffect, useState } from "react";

function FormClient() {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({
    name: "",
    Tdoc: "",
    Ndoc: "",
    email: "",
    Fnac: "",
    address: "",
    age: "",
  });

  useEffect(() => {
    if(params.id){
      axios.get(`http://localhost:8080/${params.id}`).then(res => {
        setData(res.data)
      })
    }
  });
  
  return (
    <Formik
      initialValues={data}
      onSubmit={(values) => {
        axios[params.id ? "put" : "post"]("http://localhost:8080", values).then(res => {
          if(res.status===200){
            navigate("/");
          }
        });
      }}
      enableReinitialize
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "campo requerido";
        } else if (!values.Ndoc) {
          errors.Ndoc = "campo requerido";
        } else if (!values.Tdoc) {
          errors.Tdoc = "campo requerido";
        }
        return errors;
      }}
    >
      {({ values, handleChange, handleBlur, errors, isValid, dirty }) => (
        <Form>
          <div className="card">
            <div className="container">
              <h1 className="mt-3">Formulario cliente</h1>
              <div className="row ">
                <div className="col-10">
                  <div className="form-group">
                    <label>Nombre*</label>
                    <Field
                      id="name"
                      name="name"
                      type="text"
                      className="form-control"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && (
                      <div className="form-text text-danger">{errors.name}</div>
                    )}
                  </div>
                </div>
                <div className="col-2"></div>
                <div className="col-8">
                  <div className="form-group">
                    <label>Tipo de documento*</label>
                    <select
                      id="Tdoc"
                      name="Tdoc"
                      type="text"
                      className="form-control"
                      value={values.Tdoc}
                      onChange={handleChange}
                    >
                      <option value={""}>Seleccione...</option>
                      <option value={"Cc"}>Cedula de ciudadania</option>
                      <option value={"Ti"}>Tarjeta de Identidad</option>
                      <option value={"Ce"}>Celuda extranjera</option>
                      <option value={"Pas"}>Pasaporte</option>
                    </select>
                    {errors.Tdoc && (
                      <div className="form-text text-danger">{errors.Tdoc}</div>
                    )}
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-group">
                    <label>No. documento*</label>
                    <Field
                      id="Ndoc"
                      name="Ndoc"
                      type="text"
                      className="form-control"
                      value={values.Ndoc}
                      onChange={handleChange}
                    />
                    {errors.Ndoc && (
                      <div className="form-text text-danger">{errors.Ndoc}</div>
                    )}
                  </div>
                </div>
                <div className="col-10">
                  <div className="form-group">
                    <label>Correo</label>
                    <Field
                      id="email"
                      name="email"
                      type="text"
                      className="form-control"
                      value={values.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label>Fecha</label>
                    <Field
                      id="Fnac"
                      name="Fnac"
                      type="date"
                      className="form-control"
                      value={values.Fnac}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-8">
                  <div className="form-group">
                    <label>Direccion</label>
                    <Field
                      id="address"
                      name="address"
                      type="text"
                      className="form-control"
                      value={values.address}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-group">
                    <label>Edad</label>
                    <Field
                      id="age"
                      name="age"
                      type="text"
                      className="form-control"
                      value={values.age}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-6">
                  <Link to="/" className="btn btn-primary">
                    Salir
                  </Link>
                </div>
                <div className="col-6 ">
                  <button
                    type="submit"
                    className="btn btn-success float-end"
                    disabled={!isValid || !dirty}
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
export default FormClient;
