import React from "react";

import Article from "./components/Article";

export default function App() {
  let artigos = [
    { id: 1, titulo: "Um", subtitulo: "Sub Um" },
    { id: 2, titulo: "Dois", subtitulo: "Sub Dois" },
    { id: 3, titulo: "Três", subtitulo: "Sub Três" },
    { id: 4, titulo: "Quatro", subtitulo: "Sub Quatro" },
    { id: 5, titulo: "Cinco", subtitulo: "Sub Cinco" },
    { id: 6, titulo: "Seis", subtitulo: "Sub Seis" },
    { id: 7, titulo: "Sete", subtitulo: "Sub Sete" },
    { id: 8, titulo: "Oito", subtitulo: "Sub Oito" },
  ]

  let conteudo = artigos.map((artigo) => 
    <Article 
      key={artigo.id}
      titulo={artigo.titulo} 
      subtitulo={artigo.subtitulo} 
    />
  )

  return (
    <>
      <h3>App!</h3>
      {conteudo}
    </>
  )
}