import { 
  Header, 
  HeroSection, 
  BeforeAfterSection, 
  EbookSection,
  BackgroundContainer 
} from '@/components'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <BackgroundContainer />
      <Header />
      
      <main className="main-container">
        <HeroSection />
        <BeforeAfterSection />
        <EbookSection />
        
        <section className="cta-section">
          <div className="cta-container">
            <h2 className="cta-heading">Zacznijmy współpracę</h2>
            <p className="cta-subheading">
              Skontaktuj się z nami, aby omówić optymalizację Twojej wizytówki Google.
            </p>
            <Link href="/kontakt" className="main-cta-btn">
              ZWIĘKSZ SPRZEDAŻ
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}