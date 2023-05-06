const AppNgIf = () => {
  const someExpression = true

  return (
    <>
      <h4>NgIf</h4>

      {someExpression && <p>Hi</p>}
    </>
  )
}

export default AppNgIf
