'use client'
import { useEffect } from 'react'

const AppMessage = ({ message }: { message: string }) => {
  useEffect(() => {
    console.log(`Message changed: ${message}`)
  }, [message])

  return (
    <>
      <p>Message: {message}</p>
    </>
  )
}

export default AppMessage
