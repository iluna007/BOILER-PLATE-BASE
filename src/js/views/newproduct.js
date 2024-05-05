import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Newproduct = () => {
  const { store, actions } = useContext(Context);
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    id: "",
  });

  const saveProduct = (e) => {
    e.preventDefault();
    actions.postProduct(store.titulo, data);
  };
  console.log(store.titulo);
  const info = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="text-start mt-5">
      <div className="container">
        <form>
          <div className="mb-3">
            <label for="exampleInputAgendaName" className="form-label">
              Nombre de cartera
            </label>
            <input
              type="agendaname"
              className="form-control"
              id="exampleInputAgendaName"
              value={store.titulo}
              placeholder={store.titulo}
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputFullName" className="form-label">
              Nombre de producto
            </label>
            <input
              type="fullname"
              className="form-control"
              id="exampleInputFullName"
              value={data.name}
              onChange={info}
              name="name"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Precio
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={data.email}
              onChange={info}
              name="email"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputAdress" className="form-label">
              Dimensiones
            </label>
            <input
              type="adress"
              className="form-control"
              id="exampleInputAdress"
              value={data.address}
              onChange={info}
              name="address"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPhone1" className="form-label">
              Tiempo de entrega
            </label>
            <input
              type="phone"
              className="form-control"
              id="exampleInputPhone1"
              value={data.phone}
              onChange={info}
              name="phone"
            />
          </div>
          <div className="container text-center row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            <div className="col">
              <button onClick={saveProduct} className="btn btn-outline-success">
                save
              </button>
            </div>
            <div className="col">
              <Link to="/contacts">
                <button className="btn btn-link">
                  o regresa a producto
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
