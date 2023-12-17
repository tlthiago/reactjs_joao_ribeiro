import "../css/contador.css";

export default function UseState_07a({diminuir, aumentar, valor}) {
  return (
    <>
      <span className='margem'>
				<button onClick={diminuir}>-</button>
				<span>{valor}</span>
				<button onClick={aumentar}>+</button>
			</span>
    </>
  )
}