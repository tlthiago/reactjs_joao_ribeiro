import { useState } from "react"

export default function Cliente2() {
  const [cliente, setCliente] = useState({
      nome: "",
      apelido: "",
      cidade: "",
      email: "",
  });

  const setValor = (chave, valor) => {
    setCliente((prevCliente) => ({
      ...prevCliente,
      [chave]: valor
    }));
  };

  return (
    <>
      <p>Nome: {cliente.nome}</p>
      <p>Apelido: {cliente.apelido}</p>
      <p>Cidade: {cliente.cidade}</p>
      <p>Email: {cliente.email}</p>

      <button onClick={() => setValor("nome", "Thiago")}>Definir nome</button>
      <button onClick={() => setValor("apelido", "TL")}>Definir apelido</button>
      <button onClick={() => setValor("cidade", "Belo Horizonte")}>Definir cidade</button>
      <button onClick={() => setValor("email", "tl@gmail.com")}>Definir email</button>
    </>
  )
}