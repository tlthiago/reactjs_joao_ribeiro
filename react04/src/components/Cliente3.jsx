import { useState } from "react"

export default function Cliente3() {

  const tmp = {
    nome: "",
    apelido: "",
    cidade: "",
    email: "",
  }

  const [cliente, setCliente] = useState(tmp);

  return (
    <>
      <p>Nome: {cliente.nome}</p>
      <p>Apelido: {cliente.apelido}</p>
      <p>Cidade: {cliente.cidade}</p>
      <p>Email: {cliente.email}</p>

      <button onClick={() => {
        const c = {...cliente}
        c.nome = "Thiago"
        setCliente(c)
      }}>Nome</button>

      <button onClick={() => {
        const c = {...cliente}
        c.apelido = "TL"
        setCliente(c)
      }}>Sobrenome</button>

      <button onClick={() => {
        const c = {...cliente}
        c.cidade = "Belo Horizonte"
        setCliente(c)
      }}>Cidade</button>

      <button onClick={() => {
        const c = {...cliente}
        c.email = "tl@gmail.com"
        setCliente(c)
      }}>Email</button>
    </>
  )
}