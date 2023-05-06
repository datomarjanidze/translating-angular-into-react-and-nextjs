'use client'
const AppEventBinding = () => {
  const handleClick = (): void => {
    console.log('Clicked on div')
  }

  return (
    <>
      <h4>Event binding</h4>

      <div onClick={handleClick}>Click me</div>
    </>
  )
}

export default AppEventBinding
