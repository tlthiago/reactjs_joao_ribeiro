import { useState } from "react";

import UseState_06a from "./UseState_06a.jsx";

export default function HookState06() {

  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);

  function diminuir(valor, quantidade) {
    valor == 1 ? setValor1(valor1 - quantidade) : setValor2(valor2 - quantidade);
  }

  function aumentar(valor, quantidade) {
    valor == 1 ? setValor1(valor1 + quantidade) : setValor2(valor2 + quantidade);
  }

  return (
    <>
      <h4>useState - Exercício 4</h4>
      
      <p>Valor: Adição de {valor1} + {valor2} = {valor1 + valor2}</p>
      <hr />
      <UseState_06a 
        diminuir={() => diminuir(1, 5)} 
        aumentar={() => aumentar(1, 5)} 
        valor={5}
      />
      <UseState_06a 
        diminuir={() => diminuir(2, 10)} 
        aumentar={() => aumentar(2, 10)}
        valor={10} 
      />
    </>
  )
}