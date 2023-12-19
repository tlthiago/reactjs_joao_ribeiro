import { useState, useEffect, useRef } from "react";

export default function HookEffect18() {

  const [valor, setValor] = useState(0);
  const renderInicial = useRef(true);

  const incremento = () => {
    setValor(valor + 1);
  }

  useEffect(() => {
    if (renderInicial.current) {
      renderInicial.current = false;
    } else {
      console.log("Código executado apenas quando o VALOR é alterado");
    }
  }, [valor]);

  return (
    <>
      <h3>React Hooks - useEffect 02</h3>
      <button onClick={incremento}>Incrementar</button>
      <h3>{valor}</h3>
    </>
  )
}