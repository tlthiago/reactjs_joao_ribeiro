import { useState } from "react";

export default function HookState13() {

  const [text, setText] = useState("");
  
  return (
    <>
      <h4>useState - Exercício 10</h4>

      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Digite o seu nome" />
      <p>O nome digitado é: {text}</p>
    </>
  )
}