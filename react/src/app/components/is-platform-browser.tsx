'use client'

import { useState, useEffect } from 'react'

const AppIsPlatformBrowser = () => {
  const [userAgent, setUserAgent] = useState<string>()

  useEffect(() => {
    setUserAgent(window.navigator.userAgent)
  }, [])

  return (
    <>
      <h4>isPlatformBrowser</h4>

      <p>{userAgent}</p>
    </>
  )
}

export default AppIsPlatformBrowser
