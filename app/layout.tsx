import { Header, Sidebar } from '@/components'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex bg-[#F7FBFF] h-screen'>
        <Sidebar />

        <main className='p-10 max-w-7xl w-full mx-auto overflow-y-auto'>
        <Header />
        {children}
        </main>
        </body>
    </html>
  )
}
