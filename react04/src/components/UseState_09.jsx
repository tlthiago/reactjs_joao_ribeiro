import { useState } from "react";

export default function HookState09() {

  const [login, setLogin] = useState(false);
  const [btnText, setBtnText] = useState("Login");

  return (
    <>
      <h4>useState - Exercício 7</h4>

      <button 
        onClick={() => {
          setLogin(!login)
          setBtnText(login ? "Login" : "Logout")
        }
      }
      >{btnText}</button>
      
      {login && <p>Usuário logado!</p>}
    </>
  )
}