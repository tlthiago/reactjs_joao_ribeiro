import { useState } from 'react';

export default function HookState01() {
  
  const [valor, setValor] = useState(0);
  
  function diminuir() {
    setValor(valor - 1);
  }

  function aumentar() {
    setValor(valor + 1);
  }

  return (
    <>
      <h4>useState</h4>
      <p>Valor: {valor}</p>
      <button onClick={diminuir}>Diminuir</button>
      <button onClick={aumentar}>Aumentar</button>
    </>
  )
}