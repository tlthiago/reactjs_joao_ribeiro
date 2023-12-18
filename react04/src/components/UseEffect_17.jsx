import { useState, useEffect } from "react";

export default function HookEffect17() {

  const [valor, setValor] = useState(0);
  const [nome, setNome] = useState("");

  const incremento = () => {
    setValor(valor + 1);
  }

  const definirNome = () => {
    setNome("Thiago Alves");
  }

  useEffect(() => {
    console.log("Executar apenas ao renderizar o componente.");
  }, []);

  useEffect(() => {
    console.log("Executar apenas na alteração do VALOR");
  }, [valor]);

  useEffect(() => {
    console.log("Executar apenas na alteração do NOME");
  }, [nome])

  useEffect(() => {
    console.log("Executar sempre que VALOR e NOME sejam alterados");
  }, [valor, nome]);

  return (
    <>
      <h3>React Hooks - useEffect 01</h3>
      <button onClick={incremento}>Incrementar</button>
      <h3>{valor}</h3>
      <button onClick={definirNome}>Definir nome</button>
      <h3>{nome}</h3>
    </>
  )
}