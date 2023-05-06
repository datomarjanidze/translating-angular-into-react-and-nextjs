'use client'
import { useRouter } from 'next/navigation'

const AppRouter = () => {
  const router = useRouter()
  const navigate = (): void => {
    router.push('/components/router/foo')
  }

  return (
    <>
      <h4>Router</h4>

      <button onClick={navigate}>Navigate to foo component</button>
    </>
  )
}
export default AppRouter
