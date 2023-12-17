import { useState } from "react";

import HookState12a from "./UseState_12a";

export default function HookState12() {

  const [exibir, setExibir] = useState(false);
  const [btnText, setBtnText] = useState("Mostrar Componente B");
  
  return (
    <>
      <h4>useState - Exercício 9</h4>

      <button 
        onClick={
          () => {
            setExibir(!exibir)
            setBtnText(exibir ? "Mostrar Componente B" : "Mostrar Componente A")
          }
        }
      >
        {btnText}
      </button>
      
      <HookState12a exibir={!exibir} />
    </>
  )
}