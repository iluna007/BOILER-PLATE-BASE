import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/navBar.css";

export const Navbar1 = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <nav className="navbar navbar-light bg-light mb-3">
        <div className="container">
          <Link to="/home1">
            <button className="btn btn-outline-secondary">Home1</button>
          </Link>

          <div className="p-3 mb-2 bg-dark-subtle text-dark-emphasis">
            <div className="btn-group dropstart">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Favorites{" "}
                <span className="badge text-bg-secondary">
                  {store.charactersLiked.length}
                </span>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#"></a>
                </li>
                {store.charactersLiked.length === 0 ? (
                  <li>
                    <p>Empty</p>
                  </li>
                ) : (
                  store.charactersLiked.map((elemento, index) => (
                    <li key={index}>
                      <a className="dropdown-item" href="#">
                        <div className="d-flex justify-content-between m-2 ">
                          <p>{elemento}</p>
                          <i
                            onClick={() => actions.deleteFavorite(elemento)}
                            className="bi bi-trash3-fill"
                          ></i>
                        </div>
                      </a>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="navbar-brand" href="#">
                  Vendedor
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={actions.getAgendas}
                >
                  Carteras de disponibles
                </a>
                <ul className="dropdown-menu">
                  {store.agendas.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="list-group-item d-flex justify-content-between"
                      >
                        <a className="dropdown-item" href="#">
                          {item.slug}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/">
                  <a className="nav-link active" aria-current="page" href="#">
                    Agregar/Eliminar Carteras
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/newcontact">
                  <a className="nav-link" href="#">
                    Agregar Productos
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contacts">
                  <a className="nav-link" href="#">
                    Productos
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Cartera: <strong>{store.titulo}</strong>
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
