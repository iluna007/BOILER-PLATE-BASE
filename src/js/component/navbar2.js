import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/navBar.css";

export const Navbar2 = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <div className="container">
        
      </div>
    </nav>
  );
};
