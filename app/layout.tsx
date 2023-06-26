import { Footer, Navbar } from '@/components'
import './globals.css'


export const metadata = {
  title: 'Chadodong Car Rental',
  description: `Pagadian's Best Car Rental Service`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
