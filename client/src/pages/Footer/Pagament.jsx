import React from "react";

export default function MetodesPago() {
  return (
    <div>
      <header className="Header">
        <div className="header-title">
          {" "}
          {/*background image con parallax*/}
          <h1>Mètodes de Pagament</h1>
        </div>
      </header>
      <main>
        <h1>MÈTODES DE PAGAMENT</h1>
        <p>
          Nosaltres treballem amb: Paypal Transferencia bancaria i amb Bizum
          Transferencia. Tots els mètodes de paganment són completament segurs.
          Tota la seva informació personal (informació sobre pagament, direcció
          de correu electrònic, direcció postal, etc...) i els detalls de
          pagament estan protegits per encriptats i per un sistema
          d'autorització adicional.
        </p>
        <h3>PAYPAL</h3>
        <p>
          Si escolleix realitzar el pagament mitjançant Paypal, es redirigirà a
          la plataforma de Paypal per poder completar el pagament. Si no tens un
          compte de Paypal, pots ser creada durant el procés de compra per poder
          realitzar la comanda. Serà
        </p>
        <h3>BIZUM</h3>
        <p>
          Si escolleix realitzar el pagament mitjançant Bizum, es redirigirà a
          la plataforma de Bizum per poder completar el pagament, haurà de
          seguir els passos que li indiquin. Si no es té compte de Bizum, pot
          ser creada durant el procés de compra per poder realitzar la comanda.
          Bizum es un servei íntegrament ofert per canals bancaris, pel que està
          totalment respaldat pels sistemes de seguretat dels bancs. La
          transferencia sempre la ordena el banc i són ells els que
          s'encarreguen d'autentificar l'usuari. Serà pot dirigir-se a{" "}
          <a>aquest enllaç</a> per si té més dubtes per utilitzar aquest servei.
        </p>
      </main>
    </div>
  );
}
