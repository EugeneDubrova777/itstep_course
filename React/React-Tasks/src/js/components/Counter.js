import { useState } from 'react';

function Counter({start}) {
  const [number, setNumber] = useState(start);
  function plus() {
    setNumber(number + 1);
  }

  function minus() {
    setNumber(number - 1);
  }

  return (
    <>
    <button onClick={plus}>{'+'}</button>
    <span>{number}</span>
    <button onClick={minus}>{'-'}</button>
    </>
  )
}

export default Counter;