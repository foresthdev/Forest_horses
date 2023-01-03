import React from "react";
import "../App.css";
import cataleg from "../pages/tienda/Cataleg";
import { Link } from "react-router-dom";

export default function CatalegHome() {
  return (
    <div className="CatalegHome">
      <h1 href={cataleg}>Cataleg</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <Link to="detalle/1">
              <img
                src="https://i.imgur.com/gKq7Lay.jpg"
                className="imghomecataleg"
                style={{ width: "350px" }}
                alt="bag1"
              />
            </Link>
          </div>
          <div className="col">
            <Link to="detalle/2">
              <img
                src="https://i.imgur.com/KucgSMo.jpg"
                // href={} router
                className="imghomecataleg"
                style={{ width: "350px" }}
                alt="cup"
              />
            </Link>
          </div>
          <div className="col">
            <Link to="detalle/3">
              <img
                src="https://i.imgur.com/B2guuEe.jpg"
                // href={} router
                className="imghomecataleg"
                style={{ width: "350px" }}
                alt="bag2"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
