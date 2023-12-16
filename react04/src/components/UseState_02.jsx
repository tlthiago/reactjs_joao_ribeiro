import { useState } from 'react';

export default function HookState02() {
  
  const [valor, setValor] = useState(0);
  
  function diminuir() {
    setValor(valor - 1);
  }

  function aumentar() {
    setValor(valor + 1);
  }

  function diminuir_valor(a) {
    setValor(valor - a)
  }

  return (
    <>
      <h4>useState</h4>
      <p>Valor: {valor}</p>
      <button onClick={() => diminuir_valor(10)}>Diminuir+</button>
      <button onClick={diminuir}>Diminuir</button>
      <button onClick={aumentar}>Aumentar</button>
    </>
  )
}