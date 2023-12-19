import { useState, useEffect } from "react";

export default function HookEffect19() {

  const [paises, setPaises] = useState([]);
  
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(resposta => resposta.json())
      .then(dados => setPaises(dados))
  }, [])

  return (
    <>
      <h3>React Hooks - useEffect 03 - Países</h3>
      <ul>
        {paises.map(pais => 
            <li
              key={pais.cca2}
            >
              {pais.name.common}
            </li>
          )
        }
      </ul>
    </>
  )
}