const AppDataBinding = () => {
  const buttonName = 'take-care-now'
  const disabled = true

  return (
    <>
      <h4>Data binding</h4>

      <button name={`prefix-${buttonName}`} disabled={disabled}>
        Take care now. Bye-bye, then.
      </button>
    </>
  )
}

export default AppDataBinding
