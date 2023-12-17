import { useState } from "react";

import "../css/useState_11.css";

export default function HookState09() {

  const [classe, setClasse] = useState(false);
  
  return (
    <>
      <h4>useState - Exercício 9</h4>

      <button onClick={() => setClasse(!classe)}>Mudar Classe</button>
      
      { !classe ? (
          <p className="paragrafo classeUm">Parágrafo</p>
        ) : (
          <p className="paragrafo classeDois">Parágrafo</p>
        ) 
      }
    </>
  )
}