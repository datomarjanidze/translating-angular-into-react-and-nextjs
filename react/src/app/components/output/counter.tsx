import { Dispatch, SetStateAction, useState } from 'react'

const AppCounter = ({
  countChange
}: {
  countChange: Dispatch<SetStateAction<number>>
}) => {
  let [count, internalCountChange] = useState<number>(0)

  const handleIncrement = (): void => {
    ++count
    internalCountChange(count)
    countChange(count)
  }

  return (
    <>
      <button onClick={handleIncrement}>Increment</button>
    </>
  )
}

export default AppCounter
