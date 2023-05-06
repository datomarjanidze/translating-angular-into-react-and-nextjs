import { Dispatch, SetStateAction } from 'react'

const AppCounter = ({
  firstCount,
  firstCountChange
}: {
  firstCount: number
  firstCountChange: Dispatch<SetStateAction<number>>
}) => {
  const incrementCounter = (): void => {
    firstCountChange(++firstCount)
  }

  return (
    <>
      <p>Child `firstCount` state: {firstCount}</p>

      <button onClick={incrementCounter}>Increment first counter</button>
    </>
  )
}

export default AppCounter
