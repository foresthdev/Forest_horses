import React from "react";
import Paypal from '../../components/Paypal';

export default function Donacions() {
  return (
    <div>
      <header className="Header">
        <div className="header-title">
          {/*background image con parallax*/}
          <h1>Donacions</h1>
        </div>
      </header>
      <main>
        <section className="donacions">
          <img
            src="https://i.imgur.com/lJ6w8qL.png"
            classname="imgdonacions"
            alt="banner donacions de temps"
          />
          <p>
            Per tal de poder assolir els objectius de l'Associació, necessitem
            persones voluntàries amants de la natura i les seves formes de vida
            que donin suport en les tasques de restauració forestal i ens ajudin
            a impulsar la rehabilitació del patrimoni. El suport del voluntariat
            contribueix a la conservació dels espais naturals i en conseqüència
            la biodiversitat, assegurant zones de pastura per als cavalls en la
            tasca de neteja de sotabosc i prevenció d'incendis. ​ Pots unir-te
            al Forest com a voluntari o voluntària de forma periòdica o
            puntualment participant en les activitats que anem organitzant.
          </p>
        </section>
        <section className="donacions">
          <img
            src="https://i.imgur.com/zCYx1FT.png"
            classname="imgdonacions"
            alt="banner donacions de materials"
          />
          <p>
            Una altra opció de col·laborar i formar part d'aquest projecte és
            aportant material per la tasca al Forest. Aquestes donacions són
            també molt necessàries i ens ajuden molt. Pots donar material per: ​
            <ul>
              <li>Tancats</li>
              <li> Benestar cavalls</li>
              <li>Restauració forestal</li>
              <li>Caixes niu</li>
            </ul>
             
          </p>
        </section>
        <section className="donacions">
          <img
            src="https://i.imgur.com/zjGBlyx.png"
            classname="imgdonacions"
            alt="banner donacions econòmiques"
          />
          <p>
            Si sents que vols col·laborar amb l'Associació però no disposes de
            temps lliure, pots fer una aportació econòmica de forma puntal o
            periòdica. Al ser una entitat petita, els nostres recursos econòmics
            són mínims, per això tota ajuda és rebuda amb enorme gratitud.
            D'aquesta forma, passes a ser part d'aquesta simbiosi, contribuint
            al benestar dels boscos i la seva biodiversitat.
          </p>
          
          <Paypal/>
          <img src='https://i.imgur.com/Gr2FbNO.png' href='https://sis-t.redsys.es:25443/sis/rest/trataPeticionREST' alt='redirecció a redsys'/>
        </section>
        <p>
          I si en tens d'algún altre tipus i creus que pot servir, no dubtis en
          escriure'ns, t'ho agrairem infinitament! :)
        </p>
      </main>
    </div>
  );
}
