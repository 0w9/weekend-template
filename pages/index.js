import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-xl w-full px-4">
          <p className="font-bold text-3xl text-center text-black">
            Happy building
            <span className="inline-block ml-2 animate-spin">🚢</span>
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="https://example.com/template-maker"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mr-4"
            >
              Follow me on Twitter 🔗
            </a>
            <a
              href="https://buymeacoffee.com/lennardships"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4"
            >
              Buy me a tea 🍵
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
