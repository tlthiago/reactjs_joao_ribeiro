import { useRef } from "react";

export default function HookRef16() {

  const valor = useRef(10);

  console.log("Componente renderizado!");

  const incrementar = () => {
    valor.current = valor.current + 1;
  }

  return (
    <>
      <h3>React Hooks - useRef</h3>
      <p>Valor: {valor.current}</p>
      <button onClick={incrementar}>Incremento</button>
    </>
  )
}