import '../styles/globals.css'
import { useEffect } from 'react'
import posthog from 'posthog-js'

useEffect(() => {
  posthog.init(
    process.env.POSTHOG_API_KEY,
    {
      api_host: process.env.POSTHOG_API_HOST
    })
}, [])

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
