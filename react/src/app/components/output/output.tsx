'use client'
import { useState } from 'react'
import AppCounter from './counter'

const AppOutput = () => {
  const [count, countChange] = useState<number>(0)

  return (
    <>
      <h4>Output</h4>

      <p>Count: {count}</p>
      <AppCounter countChange={countChange} />
    </>
  )
}

export default AppOutput
