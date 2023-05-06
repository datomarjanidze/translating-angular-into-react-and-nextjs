const AppNgStyle = () => {
  const backgroundColor = 'yellowgreen'

  return (
    <>
      <h4>NgStyle</h4>

      <p
        style={
          {
            backgroundColor
          } as { [key: string]: string }
        }
      >
        Message in yellowgreen
      </p>
    </>
  )
}

export default AppNgStyle
