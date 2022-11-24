import React from "react";
import '../../App.css';

export default function nologin() {
  return (
    <div>
      <h3>401 Authorization Required</h3>
      <h6>
        No s’ha pogut realitzar l'inici de sessió. Si us plau, torneu a intentar-ho.
      </h6>
    </div>
  );
}
