import { useState } from "react";

import UseState_05a from "./UseState_05a";

export default function HookState05() {

  const [valor, setValor] = useState(0);

  function atualizarValor() {
    setValor(valor + 1000);
  }

  return (
    <>
      <h4>useState - Exercício 3</h4>
      
      <p>Valor: {valor}</p>
      <hr />
      <UseState_05a atualizar={atualizarValor} />
    </>
  )
}