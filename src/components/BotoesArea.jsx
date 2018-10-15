import React, { Component } from "react";
import { Link } from "react-router-dom";

const BotaoArea = ({ area = "aluno", texto = "Área do aluno" }) => (
  <Link
    to={"/area-" + area}
    className="btn btn-light py-4 px-md-5 pl-sm-5 text-primary"
  >
    {texto}
  </Link>
);
const BotoesArea = () => (
  <div className="row justify-content-around">
    <div
      className="btn-group btn-light mr-2 col-auto p-0"
      role="group"
      id="botoes-area"
      aria-label="First group"
    >
      <BotaoArea area="aluno" texto="Área do aluno" />
      <BotaoArea area="visitante" texto="Área do visitante" />
      <BotaoArea area="docente" texto="Área do docente" />
    </div>
  </div>
);

export default BotoesArea;
