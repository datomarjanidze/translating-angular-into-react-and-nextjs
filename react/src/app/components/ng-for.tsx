const AppNgFor = () => {
  const fruits = ['🍊', '🍏', '🥑']

  return (
    <>
      <h4>NgFor</h4>

      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </>
  )
}

export default AppNgFor
