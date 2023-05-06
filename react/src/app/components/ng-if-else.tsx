const AppNgIfElse = () => {
  const someExpression = false

  return (
    <>
      <h4>NgIfElse</h4>

      {someExpression ? <p>Hi</p> : <p>Hello</p>}
    </>
  )
}

export default AppNgIfElse
