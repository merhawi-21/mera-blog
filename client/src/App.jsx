import { useState } from 'react'
import './index.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl text-red-500'>App works properly</h1>
    </>
  )
}

export default App
