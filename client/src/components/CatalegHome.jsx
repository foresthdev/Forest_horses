import React from "react";
import cataleg from "../pages/tienda/Cataleg";
import { Link } from "react-router-dom";

export default function CatalegHome() {
  return (
    <div className="CatalegHome">
      <h1 href={cataleg}>Cataleg</h1>
      <Link to="detalle/1">
        <img
          src="https://i.imgur.com/gKq7Lay.jpg"
          className="bag1"
          style={{ width: "30em" }}
          alt="bag1"
        />
      </Link>
      <Link to="detalle/2">
        <img
          src="https://i.imgur.com/KucgSMo.jpg"
          // href={} router
          className="cup"
          style={{ width: "30em" }}
          alt="cup"
        />
      </Link>
      <Link to="detalle/3">
        <img
          src="https://i.imgur.com/B2guuEe.jpg"
          // href={} router
          className="bag2"
          style={{ width: "30em" }}
          alt="bag2"
        />
      </Link>
    </div>
  );
}
