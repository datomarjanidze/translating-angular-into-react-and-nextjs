const AppNgSwitch = () => {
  let id: number
  id = 2

  return (
    <>
      <h4>NgSwitch</h4>

      <p>
        Hi&nbsp;
        {(() => {
          switch (id) {
            case 1:
              return 'Kaylee'
            case 2:
              return 'Maeve'
            case 3:
              return 'Summer'
            default:
              return 'there'
          }
        })()}
      </p>
    </>
  )
}

export default AppNgSwitch
