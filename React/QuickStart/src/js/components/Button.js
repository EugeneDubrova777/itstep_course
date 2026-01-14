import { useState } from 'react';

function Button({startCount, btnClass, step}) {
  const [count, setCount] = useState(startCount);

  function handleClick() {
    setCount(count + step);
  }

  return (
    <button className={btnClass} onClick={handleClick}>I'm {count} butt</button>
  );
}

export default Button;