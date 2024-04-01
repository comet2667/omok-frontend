import { useState } from 'react'
import Ground from './pages/Ground'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Ground/>
    </>
  )
}

export default App
