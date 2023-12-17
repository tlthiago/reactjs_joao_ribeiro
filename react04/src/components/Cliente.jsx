import { useState } from "react"

export default function Cliente() {

  const [nome, setNome] = useState("");
  const [apelido, setApelido] = useState("");
  const [cidade, setCidade] = useState("");
  const [email, setEmail] = useState("");

  const cliente = {
    nome: nome,
    apelido: apelido,
    cidade: cidade,
    email: email,
  }

  return (
    <>
      <p>Nome: {cliente.nome}</p>
      <p>Apelido: {cliente.apelido}</p>
      <p>Cidade: {cliente.cidade}</p>
      <p>Email: {cliente.email}</p>

      <button onClick={() => setNome("Thiago")}>Definir nome</button>
      <button onClick={() => setApelido("TL")}>Definir apelido</button>
      <button onClick={() => setCidade("Belo Horizonte")}>Definir cidade</button>
      <button onClick={() => setEmail("tl@gmail.com")}>Definir email</button>
    </>
  )
}