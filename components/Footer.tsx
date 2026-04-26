import Link from 'next/link'
import { Facebook, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-ink text-concrete-50 overflow-hidden">
      <div className="grain absolute inset-0 pointer-events-none" />

      <div className="relative px-5 md:px-10 pt-24 pb-10">
        <div className="border-t border-concrete-50/15">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pt-10">
            <div className="md:col-span-5">
              <p className="eyebrow text-safety mb-4">Sherbrooke · Estrie · QC</p>
              <h2 className="font-anton uppercase text-5xl md:text-7xl leading-[0.85] tracking-tightest">
                Construire <br /> avec rigueur <br /> depuis 10 ans
              </h2>
            </div>

            <div className="md:col-span-3 md:col-start-7">
              <p className="eyebrow text-concrete-400 mb-5">Services</p>
              <ul className="space-y-3 text-concrete-100">
                <li><Link href="/services/construction" className="cursor-pointer hover:text-safety transition-colors">Construction</Link></li>
                <li><Link href="/services/renovation" className="cursor-pointer hover:text-safety transition-colors">Rénovation</Link></li>
                <li><Link href="/services/excavation" className="cursor-pointer hover:text-safety transition-colors">Excavation</Link></li>
                <li><Link href="/services/materiaux-en-vrac" className="cursor-pointer hover:text-safety transition-colors">Matériaux en vrac</Link></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <p className="eyebrow text-concrete-400 mb-5">Contact</p>
              <ul className="space-y-4 text-concrete-100">
                <li>
                  <a href="tel:18195601882" className="cursor-pointer flex items-start gap-3 group">
                    <Phone className="w-4 h-4 mt-1 text-safety shrink-0" strokeWidth={1.5} />
                    <span className="group-hover:text-safety transition-colors">1-819-560-1882</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@ma.construction" className="cursor-pointer flex items-start gap-3 group">
                    <Mail className="w-4 h-4 mt-1 text-safety shrink-0" strokeWidth={1.5} />
                    <span className="group-hover:text-safety transition-colors">info@ma.construction</span>
                  </a>
                </li>
                <li>
                  <Link href="/bureau" className="cursor-pointer flex items-start gap-3 group">
                    <MapPin className="w-4 h-4 mt-1 text-safety shrink-0" strokeWidth={1.5} />
                    <span className="group-hover:text-safety transition-colors">
                      1100 rue Galt Est<br />
                      Sherbrooke (QC) J1G 1Y5
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-concrete-50/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs tracking-[0.2em] uppercase text-concrete-400">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-5">
            <p>© {new Date().getFullYear()} Construction Michael Aubut</p>
            <span className="hidden md:inline text-concrete-600">·</span>
            <p className="text-concrete-200">
              RBQ <span className="text-safety">56716202</span>
            </p>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://www.facebook.com/profile.php?id=100064190133631"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="cursor-pointer hover:text-safety transition-colors"
            >
              <Facebook className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <span className="hidden md:inline">APCHA · CCQ · Abritat</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
