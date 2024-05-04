import React, { useState, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card mx-3" style={{ width: "18rem" }}>
      <img src={rigoImage} className="card-img-top" alt="..." />
      <div className="card-body m-2 ">
        <h5 className="card-title">
          <strong>{props.name}</strong>
        </h5>
        <p>{props.uid}</p>
        <p className="card-text">gender:{props.gender}</p>
        <p className="card-text">hair color:{props.hair_Color}</p>
        <p className="card-text">eyes color:{props.eye_color}</p>
        <div className="d-flex justify-content-between">
          <Link
            to={"/CharactersDetail/" + props.uid}
            className="btn btn-outline-primary"
          >
            <span>Learn More</span>
          </Link>
          <button
            onClick={() => actions.favoriteLiked(props.name)}
            type="button"
            className="btn btn-outline-warning"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
