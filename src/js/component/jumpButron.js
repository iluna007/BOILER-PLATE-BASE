import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const JumpButron = () => {
  return (
    <div className="p-5 bg-body-tertiary bg-light rounded-3 m-4">
      <div className="container-fluid py-5">
        <h1 className="display-1 fw-bold">A Warm Welcome</h1>
        <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
        <button className="btn btn-primary btn-lg" type="button">Call for Action!</button>
      </div>
    </div>
  );
};

export default JumpButron;
