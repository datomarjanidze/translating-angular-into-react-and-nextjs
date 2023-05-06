import { json } from './json.pipe'

const AppPipe = () => {
  const data: object = {
    foo: [{ bar: 'baz' }]
  }

  return (
    <>
      <h4>Pipe</h4>

      <p>JSON data: {json(data)}</p>
    </>
  )
}

export default AppPipe
