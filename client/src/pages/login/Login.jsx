import React, { useState } from "react";
// import "./App.css";
import { Button } from "react-bootstrap";

export default function Login(props) {
  let [authMode, setAuthMode] = useState("signin");
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };
  if (authMode === "signin") {
    return (
      <div>
        <div className="Header">
          <div className="header-title">
            {" "}
            {/*background image con parallax*/}
            <h1>Accedeix</h1>
          </div>
        </div>
        <div className="Auth-form-container" style={{ background: "#939745" }}>
          <div className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Accedeix</h3>
              <div className="text-center">
                Encara no t'has registrat?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Fes click aquí
                </span>
              </div>
              <div className="form-group-mt-3">
                <label>Adreça electrònica</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Adreça electrònica"
                />
              </div>
              <div className="form-group mt-3"></div>
              <label>Contrasenya</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Contrasenya"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <Button
                type="submit"
                className="button"
                style={{ background: "#173A3A", border: "#173A3A" }}
              >
                Enviar
              </Button>
            </div>
            <p className="text-center mt-2">
              {/* Has oblidat la <a href="#">contrasenya?</a> */}
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="Header">
        <div className="header-title">
          {" "}
          {/*background image con parallax*/}
          <h1>Registra't</h1>
        </div>
      </div>
      <div className="Auth-form-container" style={{ background: "#939745" }}>
        <form className="Auth-form" style={{ color: "#4A4A4B" }}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Registra't</h3>
            <div className="text-center">
              Ja tens un compte?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Accedeix
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Nom i cognoms</label>
              <input
                type="full name"
                className="form-control mt-1"
                placeholder="Nom i cognoms"
              />
            </div>
            <div className="form-group mt-3">
              <label>Adreça electrònica</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Adreça electrònica"
              />
            </div>
            <div className="form-group mt-3">
              <label>Contrasenya</label>
              <input
                type="Contrasenya"
                className="form-control mt-1"
                placeholder="Contrasenya"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <Button
                type="submit"
                className="button"
                style={{ background: "#173A3A", border: "#173A3A" }}
              >
                Enviar
              </Button>
            </div>
            <p className="text-center mt-2">
              {/* Has oblidat la <a href="#">contrasenya?</a> */}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
