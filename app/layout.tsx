import type { Metadata } from 'next'
import { Anton } from 'next/font/google'
import './globals.css'
import MobileMenu from '@/components/MobileMenu'
import { Toaster } from '@/components/ui/sonner'

const anton = Anton({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
})

export const metadata: Metadata = {
  title: 'Construction Michael Aubut',
  description: 'Nous vous proposons la conception de A à Z de votre maison, nous nous occupons de toutes les étapes de la construction.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`bg-gray-800 text-white antialiased ${anton.variable}`}>
        <header className="bg-gray-900 py-4 sticky top-0 z-50 shadow-lg">
          <nav className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <a href="/" className="text-2xl font-bold text-amber-400 hover:text-amber-500 transition font-anton">
                Construction Michael Aubut
              </a>
              <div className="hidden md:flex space-x-6">
                <a href="/services/construction" className="hover:text-amber-400 transition">Construction</a>
                <a href="/services/renovation" className="hover:text-amber-400 transition">Rénovation</a>
                <a href="/services/excavation" className="hover:text-amber-400 transition">Excavation</a>
                <a href="/services/materiaux-en-vrac" className="hover:text-amber-400 transition">Vrac</a>
                <a href="/contact" className="hover:text-amber-400 transition">Contact</a>
              </div>
              <MobileMenu />
            </div>
          </nav>
        </header>
        {children}
        <footer className="bg-gray-900 py-8 mt-auto">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <h3 className="text-xl font-bold text-amber-400 mb-4">Construction Michael Aubut</h3>
                <p className="text-gray-300">
                  Qualité et expertise depuis 10 ans
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-400 mb-4">Contact</h3>
                <p className="text-gray-300">
                  <a href="tel:18195601882" className="hover:text-amber-400 transition">
                    1-819-560-1882
                  </a>
                </p>
                <p className="text-gray-300 mt-2">
                  1100 rue Galt Est<br />
                  Sherbrooke (Québec) J1G 1Y5
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-400 mb-4">Services</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="/services/construction" className="hover:text-amber-400 transition">Construction</a></li>
                  <li><a href="/services/renovation" className="hover:text-amber-400 transition">Rénovation</a></li>
                  <li><a href="/services/excavation" className="hover:text-amber-400 transition">Excavation</a></li>
                  <li><a href="/services/materiaux-en-vrac" className="hover:text-amber-400 transition">Matériaux en vrac</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400">&copy; {new Date().getFullYear()} Construction Michael Aubut. Tous droits réservés.</p>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/profile.php?id=100064190133631" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-400 transition"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href="tel:18195601882" 
                    className="text-gray-400 hover:text-amber-400 transition"
                    aria-label="Téléphone"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </a>
                  <a 
                    href="mailto:info@ma.construction" 
                    className="text-gray-400 hover:text-amber-400 transition"
                    aria-label="Email"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <Toaster />
      </body>
    </html>
  )
}
