import { useState } from 'react'
import Sum from './Sum.jsx'


function App() {
  const [count, setCount] = useState(0)
  console.log("app is rendering")

  return (
    <>
    <div className='containner'>
    <h1> Count is {count}</h1>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
        INCREMENT
        </button>
         <Sum></Sum>
    </div>

    </>
  )
}

export default App
