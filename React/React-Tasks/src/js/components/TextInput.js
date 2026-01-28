import { useState } from 'react';

function TextInput({placeholder, id, type}) {
  const [value, setValue] = useState('');

  return (
    <>
    <input id={id} type={type} value={value} placeholder={placeholder} onChange={(e) => setValue(e.target.value)} />
    <p>{value}</p>
    </>
  )
}

export default TextInput;









