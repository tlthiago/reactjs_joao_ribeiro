import { useState } from "react";

import UseState_07a from "./UseState_07a.jsx";

export default function HookState07() {

  const [valor, setValor] = useState([0, 0, 0]);

  function diminuir(indice, quantidade) {
    const array = [...valor];
    array[indice] -= quantidade;
    setValor(array);
  }

  function aumentar(indice, quantidade) {
    const array = [...valor];
    array[indice] += quantidade;
    setValor(array);
  }

  return (
    <>
      <h4>useState - Exercício 5</h4>
      
      <p>Valor 0: {valor[0]}</p>
      <p>Valor 1: {valor[1]}</p>
      <p>Valor 2: {valor[2]}</p>
      <hr />
      <UseState_07a 
        diminuir={() => diminuir(0, 1)} 
        aumentar={() => aumentar(0, 1)} 
        valor={1}
      />
      <UseState_07a 
        diminuir={() => diminuir(1, 2)} 
        aumentar={() => aumentar(1, 2)}
        valor={2} 
      />
      <UseState_07a 
        diminuir={() => diminuir(2, 3)} 
        aumentar={() => aumentar(2, 3)}
        valor={3} 
      />
    </>
  )
}