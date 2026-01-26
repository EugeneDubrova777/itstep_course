import { useState } from 'react';

function TextInput({placeholder}) {
  const [value, setValue] = useState('');

  return (
    <>
    <input id="inp" type="text" value={value} placeholder={placeholder} onChange={(e) => setValue(e.target.value)} />
    <p>{value}</p>
    </>
  )
}

export default TextInput;









