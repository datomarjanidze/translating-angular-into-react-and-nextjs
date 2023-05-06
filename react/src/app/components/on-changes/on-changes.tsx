'use client'
import { useState } from 'react'
import AppMessage from './message'

const AppOnChanges = () => {
  const [message, setMessage] = useState<string>('Hey')
  const changeMessage = (): void => {
    setMessage("What's up?")
  }

  return (
    <>
      <h4>OnChanges</h4>

      <AppMessage message={message} />
      <button onClick={changeMessage}>Change the message</button>
    </>
  )
}

export default AppOnChanges
