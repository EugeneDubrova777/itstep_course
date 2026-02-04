// import { useState } from 'react';

export default function Input({placeholder, id, type, name}) {
  // const [value, setValue] = useState('');

  return (
  <form>
    <input name={name} id={id} type={type} placeholder={placeholder} />
  </form>
  )
}