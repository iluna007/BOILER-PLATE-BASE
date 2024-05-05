import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Carteras = (props) => {
  const { store, actions } = useContext(Context);
  const [newuser, setNewUser] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    actions.createAgenda(newuser);
  };
  const handleDelete = (event) => {
    event.preventDefault();
    actions.deleteAgenda(user);
  };

  return (
    <div className="text-center mt-5">
      <h1>Agrega una nueva cartera de productos:</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="fullname"
              className="form-control"
              id="newAgenda"
              value={newuser}
              onChange={(e) => setNewUser(e.target.value)}
            />
            <button
              className="btn btn-outline-success"
              onClick={() => actions.createAgenda}
            >Agregar
            </button>
          </div>
          <h1>Elimina una cartera existente</h1>
        </form>
        <form onSubmit={handleDelete}>
          <div className="mb-3">
            <input
              type="fullname"
              className="form-control"
              id="newAgenda"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <button
                  className="btn btn-outline-danger"
                  onClick={() => actions.deleteAgenda}
                >Borrar
            </button>            
          </div>
        </form>
      </div>
    </div>
  );
};
