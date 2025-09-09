import { Header, BackgroundContainer } from '@/components'

export const metadata = {
  title: 'Polityka Prywatności - GMB Wizytówki',
  description: 'Polityka prywatności serwisu GMB Wizytówki - optymalizacja Google Business Profile.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <BackgroundContainer />
      <Header />
      
      <main className="main-container">
        <div className="privacy-page">
          <div className="privacy-content">
            <h1 className="privacy-title">
              <span className="highlight">POLITYKA</span><br />
              PRYWATNOŚCI
            </h1>
            
            <div className="privacy-text">
              <div className="privacy-section">
                <h2 className="privacy-section-title">1. Informacje ogólne</h2>
                <p className="privacy-paragraph">
                  Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych 
                  przekazanych przez Użytkowników w związku z korzystaniem z serwisu internetowego 
                  mapgain (dalej: &ldquo;Serwis&rdquo;).
                </p>
              </div>

              <div className="privacy-section">
                <h2 className="privacy-section-title">2. Administrator danych</h2>
                <p className="privacy-paragraph">
                  Administratorem danych osobowych jest osoba fizyczna prowadząca działalność 
                  w zakresie optymalizacji Google Business Profile, kontakt: kontakt@mapgain.pl
                </p>
              </div>

              <div className="privacy-section">
                <h2 className="privacy-section-title">3. Zakres danych</h2>
                <p className="privacy-paragraph">
                  Mogą być przetwarzane następujące dane:
                </p>
                <ul className="privacy-list">
                  <li>Dane kontaktowe: imię i nazwisko, adres e-mail, telefon (opcjonalnie)</li>
                  <li>Dane biznesowe: nazwa firmy (opcjonalnie), treść wiadomości</li>
                  <li>Dane techniczne: adres IP, data i godzina wysłania formularza</li>
                </ul>
              </div>

              <div className="privacy-section">
                <h2 className="privacy-section-title">4. Cele przetwarzania</h2>
                <ul className="privacy-list">
                  <li>Odpowiedź na zapytania przesłane przez formularz kontaktowy</li>
                  <li>Realizacja usług optymalizacji Google Business Profile</li>
                  <li>Komunikacja z klientami</li>
                  <li>Zapewnienie bezpieczeństwa Serwisu</li>
                </ul>
              </div>

              <div className="privacy-section">
                <h2 className="privacy-section-title">5. Podstawy prawne</h2>
                <ul className="privacy-list">
                  <li>Zgoda użytkownika (art. 6 ust. 1 lit. a RODO)</li>
                  <li>Prawnie uzasadniony interes administratora (art. 6 ust. 1 lit. f RODO)</li>
                </ul>
              </div>

              <div className="privacy-section">
                <h2 className="privacy-section-title">6. Okres przechowywania</h2>
                <ul className="privacy-list">
                  <li>Dane kontaktowe: do zakończenia współpracy lub cofnięcia zgody, maks. 3 lata</li>
                  <li>Dane techniczne: przechowywane tymczasowo w celach bezpieczeństwa</li>
                </ul>
              </div>

              <div className="privacy-section">
                <h2 className="privacy-section-title">7. Prawa użytkowników</h2>
                <ul className="privacy-list">
                  <li>Dostępu do danych</li>
                  <li>Sprostowania danych</li>
                  <li>Usunięcia danych</li>
                  <li>Ograniczenia przetwarzania</li>
                  <li>Przenoszenia danych</li>
                  <li>Sprzeciwu wobec przetwarzania</li>
                  <li>Cofnięcia zgody</li>
                </ul>
              </div>

              <div className="privacy-section">
                <h2 className="privacy-section-title">8. Bezpieczeństwo danych</h2>
                <p className="privacy-paragraph">
                  Dane chronione są za pomocą odpowiednich środków technicznych i organizacyjnych.
                </p>
              </div>

              <div className="privacy-section">
                <h2 className="privacy-section-title">9. Udostępnianie danych</h2>
                <p className="privacy-paragraph">
                  Dane mogą być udostępniane wyłącznie:
                </p>
                <ul className="privacy-list">
                  <li>jeśli wymagają tego przepisy prawa</li>
                  <li>w celu realizacji usług (np. dostawca hostingu)</li>
                  <li>za zgodą użytkownika</li>
                </ul>
              </div>

              <div className="privacy-section">
                <h2 className="privacy-section-title">10. Cookies</h2>
                <p className="privacy-paragraph">
                  Serwis nie wykorzystuje plików cookies ani innych technologii śledzących.
                </p>
              </div>

              <div className="privacy-section">
                <h2 className="privacy-section-title">11. Kontakt</h2>
                <p className="privacy-paragraph">
                  W sprawach związanych z przetwarzaniem danych: kontakt@mapgain.pl
                </p>
              </div>

              <div className="privacy-section">
                <h2 className="privacy-section-title">12. Skarga</h2>
                <p className="privacy-paragraph">
                  Użytkownik ma prawo złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych (UODO).
                </p>
              </div>

              <div className="privacy-section">
                <p className="privacy-last-updated">
                  Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

