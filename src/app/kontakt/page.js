import { 
  Header, 
  ContactForm, 
  BackgroundContainer 
} from '@/components'

export default function ContactPage() {
  return (
    <>
      <BackgroundContainer />
      <Header />
      
      <main className="main-container">
        <div className="contact-hero">
          <h1 className="contact-title">
            ROZPOCZNIJ <span className="highlight">WSPÓŁPRACĘ</span>
          </h1>
        </div>
        
        <ContactForm />
      </main>
    </>
  )
}