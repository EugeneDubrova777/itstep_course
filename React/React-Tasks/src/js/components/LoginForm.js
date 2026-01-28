import { useState } from 'react';
import TextInput from './TextInput';
import Button from './Button';

function LoginForm({}) {
  const [email, setEmail] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.elements[0].value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput type="email" />
      <TextInput type="password" />
      <Button label="Log in!" />
    </form>
  )  
}

export default LoginForm;