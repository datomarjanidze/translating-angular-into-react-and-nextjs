'use client'
import { useState } from 'react'
import AppCounter from './counter'

const AppInput = () => {
  let [count, setCount] = useState(0)
  const handleIncrement = (): void => {
    setCount(++count)
  }

  return (
    <>
      <h4>Input</h4>

      <AppCounter count={count} />
      <button onClick={handleIncrement}>Increment</button>
    </>
  )
}

export default AppInput
