import { useState } from "react";

export default function HookState14() {

  const [text, setText] = useState("");
  const [nomes, setNomes] = useState([]);
  
  const inserir = () => {
    setNomes(prev => [...prev, text]);
    setText("");
  }

  return (
    <>
      <h4>useState - Exercício 11</h4>

      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Digite o seu nome" />
      <button onClick={inserir}>Inserir</button>
      
      <ul>
        {
          nomes.map((data, index) => (
            <li
              key={index}
            >
              {data}
            </li>
          ))
        }
      </ul>
    </>
  )
}