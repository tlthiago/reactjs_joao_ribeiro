import { useState } from "react";

import "../css/useState_11.css";

export default function HookState09() {

  const [state, setState] = useState(true);
  const classe1 = "classeUm";
  const classe2 = "classeDois";
  
  return (
    <>
      <h4>useState - Exercício 9</h4>

      <button onClick={() => setState(!state)}>Mudar Classe</button>
      
      <p className={`paragrafo ${state ? classe1 : classe2}`}>Texto que vai ter seu aspecto alterado</p>
    </>
  )
}