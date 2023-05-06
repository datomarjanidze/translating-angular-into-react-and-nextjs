'use client'
import { createRef } from 'react'

const AppViewChild = () => {
  let message = createRef<HTMLDivElement>()

  const changeMessage = (): void => {
    if (message.current) message.current.innerText = 'New message'
  }

  return (
    <>
      <h4>ViewChild</h4>

      <div ref={message}>Message</div>
      <br />
      <button onClick={changeMessage}>Change message</button>
    </>
  )
}

export default AppViewChild
