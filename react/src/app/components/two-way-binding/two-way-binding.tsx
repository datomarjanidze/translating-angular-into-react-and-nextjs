'use client'
import { useState } from 'react'
import AppCounter from './counter'

const AppTwoWayBinding = () => {
  const [firstCount, firstCountChange] = useState<number>(0)

  return (
    <>
      <h4>Two-way binding</h4>

      <p>Parent `firstCount` state: {firstCount}</p>

      <AppCounter firstCount={firstCount} firstCountChange={firstCountChange} />
    </>
  )
}

export default AppTwoWayBinding
