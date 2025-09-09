import './globals.css'
import { ToastProvider, Footer, BodyClassHandler } from '@/components'
import { Plus_Jakarta_Sans } from 'next/font/google'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  display: 'swap',
})

export const metadata = {
  title: 'GMB Wizytówki - Optymalizacja Google Business Profile',
  description: 'Profesjonalna optymalizacja wizytówek Google Business Profile. Zwiększ widoczność swojej firmy w wyszukiwarkach lokalnych.',
  keywords: 'GMB, Google Business Profile, optymalizacja lokalna, SEO lokalne, wizytówka Google',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={`${plusJakartaSans.className} font-sans`}>
        <BodyClassHandler />
        <ToastProvider>
          {children}
          <Footer />
        </ToastProvider>
      </body>
    </html>
  )
}