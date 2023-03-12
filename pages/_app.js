import '../styles/globals.css'
import { useEffect } from 'react'
import posthog from 'posthog-js'

export default function App({ Component, pageProps }) {

  useEffect(() => {
    posthog.init(
      process.env.POSTHOG_API_KEY,
      {
        api_host: process.env.POSTHOG_API_HOST
      })
  }, [])
  
  return <Component {...pageProps} />
}
