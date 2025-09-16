import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("no message from server yet")

  async function getMessage() {
    const response = await fetch('http://localhost:3000')
    console.log([response])
    const data = await response.json()
    console.log(data)

    setMessage(data.message)
  }

  useEffect(() => {
    getMessage()
  }, [])

  return (
    <>
      {message}
    </>
  )
}

export default App
