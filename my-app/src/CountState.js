import { useState } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    </div>
  );
  
}