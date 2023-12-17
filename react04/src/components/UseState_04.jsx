import Contador from './Contador';

export default function HookState04() {
  return (
    <>
      <h4>useState - Exercício 2</h4>
      <Contador quantidade={1} />
      <Contador quantidade={5} />
      <Contador quantidade={10} />
    </>
  )
}