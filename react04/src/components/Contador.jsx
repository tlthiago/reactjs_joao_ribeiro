import { useState } from 'react';

import "../css/contador.css";

export default function HookState02({quantidade}) {
  
  const [valor, setValor] = useState(0);
  
  function diminuir(quantidade) {
    setValor(valor - quantidade);
  }

  function aumentar(quantidade) {
    setValor(valor + quantidade);
  }

  return (
    <>
      <span className='margem'>
				<button onClick={() => diminuir(quantidade)}>-</button>
				<span>{valor}</span>
				<button onClick={() => aumentar(quantidade)}>+</button>
			</span>
    </>
  )
}