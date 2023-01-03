import React, { useState } from "react";
// import "./App.css";
import { Button, Form } from "react-bootstrap";




export default function Login() {
  const [validated, setValidated] = useState(false);

  // VALIDACIÓN EMAIL Y PASSWORD
  const handleSubmit = (event) => {
    event.preventDefault()
    const user = {
      correo: "ale@mail.com",
      contraseña: "1234",
    }

    if(email === user.correo && password === user.contraseña){
      window.open('/', '_self')
    }

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const [email, setEmail] = useState('') ;
  const [password, setPassword] = useState('');

//  LOGIN

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
  
  {/* YA REGISTRADOS */}
      <div>
        <div className="Auth-form-container" style={{ background: "#939745" }}>
          <div className="Auth-form">
            <div className="Auth-form-content" style={{ width: "200px", alignItems: "center" }}>
              <h3 className="Auth-form-title" style={{ alignItems: "center" }}>
                Accedeix
              </h3>
              <div className="text-center">
                Encara no t'has registrat?{" "}
                <span
                  className="link"
                  style={{
                    color: "#173A3A",
                    fontWeight: "800",
                    textDecoration: "line",
                  }}
                  onClick={changeAuthMode}
                >
                  Fes click aquí
                </span>
              </div>
              <Form  noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mt-3" controlId="formBasicEmail">
                <Form.Label>Adreça electrònica</Form.Label>
                <Form.Control
                  type="email"
                  className="mt-1"
                  placeholder="Adreça electrònica"
                  defaultValue={email}
                  onChange={(e) =>setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mt-3" controlId="formBasicPassword">
              <Form.Label>Contrasenya</Form.Label>
              <Form.Control
                type="password"
                className="mt-1"
                placeholder="Contrasenya"
                defaultValue={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
            </Form.Group>
            <div className="d-grid gap-2 mt-3">
              <Button
                type="submit"
                className="button"
                style={{
                  background: "#173A3A",
                  border: "#173A3A",
                  width: "200px",
                }}
              >
                Desar
              </Button>
            </div>
            <p className="text-center mt-2">
              {/* Has oblidat la <a href="#">contrasenya?</a> */}
            </p>
          </Form>
          </div>
          </div>
        </div>
      </div>
      </div>
    );}
  
    // TODAVÍA NO RESGISTRADOS
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
          <div className="Auth-form-content" style={{ width: "200px" }}>
            <h3 className="Auth-form-title">Registra't</h3>
            <div className="text-center">
              Ja tens un compte?{" "}
              <span
                className="link"
                style={{
                  color: "#173A3A",
                  fontWeight: "800",
                  textDecoration: "line",
                }}
                onClick={changeAuthMode}
              >
                Accedeix
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Nom</label>
              <input
                type="name"
                className="form-control mt-1"
                placeholder="Nom"
              />
            </div>
            <div className="form-group mt-3">
              <label>Cognoms</label>
              <input
                type="lastname"
                className="form-control mt-1"
                placeholder="Cognoms"
              />
            </div>
            <div className="form-group mt-3">
              <label>Adreça electrònica</label>
              <input
                type="uname"
                className="form-control mt-1"
                placeholder="Adreça electrònica"
              />
            </div>
            <div className="form-group mt-3">
              <label>Contrasenya</label>
              <input
                type=""
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
                Desar
              </Button>
            </div>
            <p className="text-center mt-2">
              {/* Has oblidat la <a href="#">contrasenya?</a> */}
            </p>
          </div>
        </form>
      </div>
    </div>  )
  }