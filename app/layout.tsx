import { APP_NAME } from '@/constants'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ClientProvider from '@/providers/client-provider'


export const metadata: Metadata = {
  title: `Home | ${APP_NAME}`,
  description: 'Helps us save a heart',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <ClientProvider> */}
        <body>{children}</body>
      {/* </ClientProvider> */}
    </html>
  )
}
