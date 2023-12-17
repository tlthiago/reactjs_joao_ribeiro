import { useState } from "react";

import UseState_06a from "./UseState_06a.jsx";

export default function HookState06() {

  const [valor, setValor] = useState(0);

  function diminuir(quantidade) {
    setValor(valor - quantidade);
  }

  function aumentar(quantidade) {
    setValor(valor + quantidade);
  }

  return (
    <>
      <h4>useState - Exercício 4</h4>
      
      <p>Valor: {valor}</p>
      <hr />
      <UseState_06a 
        diminuir={() => diminuir(5)} 
        aumentar={() => aumentar(5)} 
        valor={5}
      />
      <UseState_06a 
        diminuir={() => diminuir(10)} 
        aumentar={() => aumentar(10)}
        valor={10} 
      />
    </>
  )
}