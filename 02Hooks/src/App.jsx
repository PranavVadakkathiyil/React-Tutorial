
import { useState } from 'react';
import './App.css'

function App() {
  const [Counder, setCounder] = useState(0)
    const add = ()=>{
      setCounder(Counder+1)
    }
    const less = () =>{
      setCounder(Counder-1)
    }
    return (
    <>
      
      <h1>Counder{Counder}</h1>
      <p>Value : {Counder}</p>
      <button onClick={add}>+</button>
      <button  onClick={less}>-</button>
      <footer>{Counder}</footer>
    </>
  )
}

export default App
