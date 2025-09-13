import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    axios.get('http://localhost:3000/count')
      .then((response)=> {
        setCount(response.data);
        console.log(response);
      })
  })
  function handleClick() {
    axios.post('http://localhost:3000/count/increment')
      .then((response)=> {
        setCount(response.data);
        console.log(response);
      })
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>+1</button>
    </div>
    
  );
};

export default App
