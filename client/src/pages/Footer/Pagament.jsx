import React from "react";

export default function MetodesPago() {
  return (
    <div>
      <header className="Header">
        <div className="header-title">
          {/*background image con parallax*/}
          <h1>Mètodes de Pagament</h1>
        </div>
      </header>
      <main>
        <h1>MÈTODES DE PAGAMENT</h1>
        <p>
          Nosaltres treballem amb: Paypal Transferència bancària i amb Bizum
          Transferència. Tots els mètodes de pagament són completament segurs.
          Tota la seva informació personal (informació sobre pagament, adreça de
          correu electrònic, direcció postal, …) i els detalls de pagament estan
          protegits per encriptats i per un sistema d'autorització addicional.
        </p>
        <h3>PAYPAL</h3>
        <p>
<<<<<<< HEAD
          Si escolleix realitzar el pagament mitjançant Paypal, es redirigirà a
          la plataforma de Paypal per poder completar el pagament. Si no tens un
          compte de Paypal, pots ser creada durant el procés de compra per poder
          realitzar la comanda. Serà
=======
          Paypal és un mètode de pagament en línia gratuït que pots utilitzar
          vagis on vagis. Pots associar la teva targeta de crèdit o dèbit, o el
          teu compte bancari de qualsevol entitat bancària, o moneda virtual que
          hagis integrat i bescanviat a la teva cartera Paypal. Si esculls
          efectuar el pagament mitjançant Paypal, se't redirigirà a la
          plataforma de Paypal per poder completar el pagament, haurà de seguir
          els passos que t'indiquin. Si no estàs registrat, pots crear un compte
          durant el procés de compra per poder fer la comanda.
>>>>>>> fdf7d0214fe69565028cc835cf53553dc582e7c2
        </p>
        <p>
          El bàner et redirigirà a la pàgina principal per si vols consultar més
          coses sobre la teva compte.
        </p>
        <img
          src="https://i.imgur.com/rNDcZif.png"
          className="banner-pagaments"
          alt="banner Paypal"
          href="https://www.paypal.com/es/webapps/mpp/home"
        />
        <h3>BIZUM</h3>
        <p>
<<<<<<< HEAD
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
=======
          Bizum és un servei íntegrament ofert per canals bancaris, per la qual
          cosa, està totalment recolzada pels sistemes de seguretat dels bancs.
          La transferència sempre l'ordena el banc i són ells els que
          s'encarreguen d'autentificar l'usuari. Si esculls fer el pagament
          mitjançant Bizum, el pagament es pot fer de dues maneres:
          <ol>
            <li>Clau Bizum</li>
            <p>
              Després de seleccionar el pagament amb Bizum en el checkout del
              comerç, introdueix el teu número de telèfon mòbil. Se't
              sol·licitarà la introducció de la teva Clau Bizum com primer
              factor d'autenticació de l'operació. Un cop, introduïda la teva
              Clau Bizum, si és correcta, se't validarà. Completat el segon
              factor d'autenticació (a criteri de cada banc emissor, generalment
              és un missatge OTP) es confirmarà l'operació.
            </p>
            <li>Request to Pay</li>
            <p>
              Després de seleccionar el pagament amb Bizum en el checkout del
              comerç, introdueix el teu número de telèfon mòbil. En continuar
              avançaràs a una pantalla amb un comptador que marca el temps
              disponible per a confirmar la compra. Rebràs en el teu dispositiu
              mòbil una notificació del teu banc per a confirmar el pagament.
              Hauràs d'autentificar-te per a accedir a l'aplicació bancària
              (primer factor d'autenticació). Confirma l'operació en l'aplicació
              del seu banc, amb el factor d'autenticació que aquest decideixi
              aplicar (OTP, biometria, ...). I per acabar, rebràs el resultat
              del pagament en l'aplicació del seu banc i en el comerç.
            </p>
          </ol>
          Si no es té compte de Bizum, pot ser creada durant el procés de compra
          per poder realitzar la comanda.
        </p>
        <p>
          El bàner et redirigirà a la pàgina principal per si vols consultar més
          coses sobre la teva compte.
        </p>

        <img
          src="https://i.imgur.com/bXHWU7F.png"
          className="banner-pagaments"
          alt="banner Bizum"
          href="https://bizum.es/"
        />
>>>>>>> fdf7d0214fe69565028cc835cf53553dc582e7c2
      </main>
    </div>
  );
}
