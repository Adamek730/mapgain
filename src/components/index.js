'use client'
import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useToast } from './Toast';

export { ToastProvider, useToast } from './Toast';
export { BodyClassHandler } from './BodyClassHandler';
export function Header() {
  return (
    <header className="header">
      <div className="nav-container">
        <Link href="/" className="logo">
          <Image 
            src="/images/logo.svg" 
            alt="Mapgain Logo" 
            className="logo-image"
            width={32}
            height={32}
          />
          <span>mapgain</span>
        </Link>
        <Link href="/kontakt" className="nav-cta">
          ZWIĘKSZ SPRZEDAŻ
        </Link>
      </div>
    </header>
  )
}

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="highlight">ZDOMINUJ</span><br />
          GOOGLE MAPS
        </h1>
        <p className="hero-subtitle"> OPTYMALIZACJA GMB</p>
        <p className="impact-statement">
          <strong>Każdego dnia tracisz potencjalnych klientów</strong> przez nieoptymalizowaną wizytówkę Google.<br />
          <strong>Nadszedł czas, aby to zmienić.</strong>
        </p>
        <div className="hero-cta-container">
          <Link href="/kontakt" className="hero-cta-btn">
            ROZPOCZNIJ WSPÓŁPRACĘ
          </Link>
        </div>
      </div>
    </section>
  )
}

export function BeforeAfterSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  const companies = useMemo(() => [
    {
      name: "Restauracja Bella Vista",
      beforeImage: "",
      afterImage: ""
    },
    {
      name: "Salon Fryzjerski Elegance",
      beforeImage: "",
      afterImage: ""
    },
    {
      name: "Serwis Samochodowy AutoMax",
      beforeImage: "",
      afterImage: ""
    }
  ], []);

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = companies.flatMap(company => [
        new Promise((resolve) => {
          const img1 = new Image();
          img1.onload = resolve;
          img1.src = company.beforeImage;
        }),
        new Promise((resolve) => {
          const img2 = new Image();
          img2.onload = resolve;
          img2.src = company.afterImage;
        })
      ]);
      
      await Promise.all(imagePromises);
      setImagesLoaded(true);
    };
    
    preloadImages();
  }, [companies]);

  const nextCompany = () => {
    setCurrentIndex((prev) => (prev + 1) % companies.length);
  };

  const prevCompany = () => {
    setCurrentIndex((prev) => (prev - 1 + companies.length) % companies.length);
  };

  const currentCompany = companies[currentIndex];

  return (
    <section className="before-after-section">
      <div className="before-after-container">
        <div className="company-header">
          <h3 className="company-name">{currentCompany.name}</h3>
          <div className="navigation-arrows">
            <button onClick={prevCompany} className="nav-arrow prev">
              ←
            </button>
            <span className="company-counter">
              {currentIndex + 1} / {companies.length}
            </span>
            <button onClick={nextCompany} className="nav-arrow next">
              →
            </button>
          </div>
        </div>
        
        <div className="comparison-grid">
          <div className="comparison-item before">
            <div className="comparison-label before">PRZED</div>
            <div className="image-placeholder">
              <Image 
                src={currentCompany.beforeImage} 
                alt={`${currentCompany.name} - przed optymalizacją`}
                width={300}
                height={200}
                className="comparison-image"
                style={{ 
                  transition: 'opacity 0.5s ease-in-out',
                  opacity: imagesLoaded ? 1 : 0.7
                }}
                priority={currentIndex === 0}
              />
            </div>
          </div>

          <div className="comparison-item after">
            <div className="comparison-label after">PO 2 MIESIĄCACH</div>
            <div className="image-placeholder">
              <Image 
                src={currentCompany.afterImage} 
                alt={`${currentCompany.name} - po 2 miesiącach optymalizacji`}
                width={300}
                height={200}
                className="comparison-image"
                style={{ 
                  transition: 'opacity 0.5s ease-in-out',
                  opacity: imagesLoaded ? 1 : 0.7
                }}
                priority={currentIndex === 0}
              />
            </div>
          </div>
        </div>
        
        <div className="comparison-bar"></div>
      </div>
    </section>
  )
}

export function EbookSection() {
  return (
    <section className="ebook-section">
      <div className="ebook-container">
        <div className="ebook-content-layout">
          <div className="ebook-text-side">
            <h2 className="ebook-title">Przeczytaj ebook o optymalizacji wizytówki Google</h2>
            <p className="ebook-description">
              Ebook zawiera wszystkie informacje o mapgain, jego funkcjach i zaletach. 
              Przeczytaj go i dowiedz się, jak może pomóc Ci w prowadzeniu biznesu.
            </p>
            <Link href="/ebook" className="ebook-cta-btn">
              CZYTAJ
            </Link>
          </div>
          
          <div className="ebook-image-side">
            <Link href="/ebook" className="ebook-visual">
              <div className="ebook-cover-main">
                <div className="ebook-cover-title">Google Business Profile</div>
                <div className="ebook-cover-subtitle">Optymalizacja wizytówki Google</div>
                <div className="ebook-cover-author">MapGain</div>
              </div>
              <div className="ebook-pages-stack">
                <div className="page-stack page-1"></div>
                <div className="page-stack page-2"></div>
                <div className="page-stack page-3"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// Loading Spinner Component
function LoadingSpinner({ label = 'Wysyłanie…' }) {
  return (
    <span className="loading-spinner" role="status" aria-live="polite" aria-label={label}>
      <svg className="spinner-svg" viewBox="0 0 50 50" focusable="false" aria-hidden="true">
        <circle className="spinner-track" cx="25" cy="25" r="22" fill="none" strokeWidth="4" />
        <circle className="spinner-indicator" cx="25" cy="25" r="22" fill="none" strokeWidth="4" />
      </svg>
      <span className="spinner-text">{label}</span>
      {/* Fallback loading indicator */}
      <span className="loading-dots" style={{ marginLeft: '8px' }}>
        <span style={{ animationDelay: '0s' }}>.</span>
        <span style={{ animationDelay: '0.2s' }}>.</span>
        <span style={{ animationDelay: '0.4s' }}>.</span>
      </span>
    </span>
  );
}

export function ContactForm() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  
  const { success, error, warning, info } = useToast();


  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    
    if (selectedFiles.length + files.length > 5) {
      warning('Można załączyć maksymalnie 5 plików');
      e.target.value = '';
      return;
    }
    
    setSelectedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (indexToRemove) => {
    setSelectedFiles(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  const handleInputChange = (e) => {
    const { name } = e.target;
    
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handlePhoneInput = (e) => {
    const value = e.target.value.replace(/[^0-9\s\+\-\(\)]/g, '');
    e.target.value = value;
    
    if (validationErrors.phone) {
      setValidationErrors(prev => ({
        ...prev,
        phone: ''
      }));
    }
  };

  const validateForm = (formData) => {
    const errors = {};
    const fullname = formData.get('fullname')?.trim();
    if (!fullname) {
      errors.fullname = 'Imię i nazwisko jest wymagane';
    } else if (fullname.length > 100) {
      errors.fullname = 'Imię i nazwisko nie może przekraczać 100 znaków';
    }
    
    const email = formData.get('email')?.trim();
    if (!email) {
      errors.email = 'Adres email jest wymagany';
    } else if (email.length > 100) {
      errors.email = 'Adres email nie może przekraczać 100 znaków';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errors.email = 'Podaj prawidłowy adres email';
      }
    }
    
    const phone = formData.get('phone')?.trim();
    if (phone && phone.length > 100) {
      errors.phone = 'Numer telefonu nie może przekraczać 100 znaków';
    }
    
    const company = formData.get('company')?.trim();
    if (company && company.length > 100) {
      errors.company = 'Nazwa firmy nie może przekraczać 100 znaków';
    }
    
    const message = formData.get('message')?.trim();
    if (!message) {
      errors.message = 'Wiadomość jest wymagana';
    } else if (message.length > 1000) {
      errors.message = 'Wiadomość nie może przekraczać 1000 znaków';
    }
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const errors = validateForm(formData);
    setValidationErrors(errors);
    
    if (Object.keys(errors).length > 0) {
      return;
    }
    
    // Force loading state to be visible
    setIsLoading(true);
    
    // Add a small delay to ensure loading state is visible
    await new Promise(resolve => setTimeout(resolve, 100));
    
    selectedFiles.forEach((file, index) => {
      formData.append(`attachment_${index}`, file);
    });
    
    try {
      // Add timeout to prevent hanging requests
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout
      
      console.log('🚀 Starting form submission...');
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      console.log('📡 Response received:', response.status);
      
      if (response.ok) {
        const result = await response.json();
        setValidationErrors({});
        
        success('Formularz został wysłany pomyślnie. Skontaktujemy się z Tobą w ciągu 12 godzin z indywidualną ofertą.');
        
        const form = document.querySelector('.contact-form');
        if (form) {
          form.reset();
        }
        setSelectedFiles([]);
      } else {
        const errorData = await response.json();
        
        if (response.status === 429) {
          error('Wystąpił błąd podczas wysyłania formularza. Skontaktuj się z nami pod adresem kontakt@mapgain.pl');
        } else {
          error('Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie.');
        }
      }
    } catch (error) {
      console.error('❌ Form submission error:', error);
      
      if (error.name === 'AbortError') {
        error('Wysyłanie formularza przekroczyło limit czasu. Spróbuj ponownie z mniejszą liczbą plików.');
      } else {
        error('Wystąpił błąd podczas wysyłania formularza. Sprawdź połączenie internetowe i spróbuj ponownie.');
      }
    } finally {
      // Add a small delay before hiding loading state
      setTimeout(() => {
        setIsLoading(false);
        console.log('✅ Loading state cleared');
      }, 500);
    }
  };


  return (
    <>
      <section className="form-section">
        <div className="form-container">
          <p className="form-title">kontakt@mapgain.pl</p>
        
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group half">
              <div className="input-container">
                <input 
                  type="text" 
                  className={`form-input ${validationErrors.fullname ? 'error' : ''}`}
                  name="fullname" 
                  placeholder="Imię i Nazwisko" 
                  maxLength={100}
                  onChange={handleInputChange}
                />
                {validationErrors.fullname && (
                  <div className="error-message">{validationErrors.fullname}</div>
                )}
              </div>
              <div className="input-container">
                <input 
                  type="email" 
                  className={`form-input ${validationErrors.email ? 'error' : ''}`}
                  name="email" 
                  placeholder="Adres Email" 
                  maxLength={100}
                  onChange={handleInputChange}
                />
                {validationErrors.email && (
                  <div className="error-message">{validationErrors.email}</div>
                )}
              </div>
            </div>
            
            <div className="form-group half">
              <div className="input-container">
                <input 
                  type="tel" 
                  className={`form-input ${validationErrors.phone ? 'error' : ''}`}
                  name="phone" 
                  placeholder="Numer Telefonu (opcjonalnie)" 
                  maxLength={100}
                  onChange={handlePhoneInput}
                />
                {validationErrors.phone && (
                  <div className="error-message">{validationErrors.phone}</div>
                )}
              </div>
              <div className="input-container">
                <input 
                  type="text" 
                  className={`form-input ${validationErrors.company ? 'error' : ''}`}
                  name="company" 
                  placeholder="Nazwa Firmy (opcjonalnie)" 
                  maxLength={100}
                  onChange={handleInputChange}
                />
                {validationErrors.company && (
                  <div className="error-message">{validationErrors.company}</div>
                )}
              </div>
            </div>
            
            <div className="form-group">
              <div className="input-container">
                <textarea 
                  className={`form-textarea ${validationErrors.message ? 'error' : ''}`}
                  name="message" 
                  placeholder="Wiadomość" 
                  maxLength={1000}
                  onChange={handleInputChange}
                />
                {validationErrors.message && (
                  <div className="error-message">{validationErrors.message}</div>
                )}
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-file">
                <input 
                  type="file" 
                  name="attachment" 
                  accept=".pdf,.doc,.docx,.jpg,.png" 
                  multiple
                  onChange={handleFileChange}
                />
                Załącz plik (opcjonalnie) 
              </label>
              
              
              {selectedFiles.length > 0 && (
                <div className="files-info">
                  <span className="files-count">Wybrane pliki: {selectedFiles.length}/5</span>
                </div>
              )}
              

              
              {selectedFiles.map((file, index) => (
                <div key={index} className="file-display">
                  <span className="file-icon">📎</span>
                  <span className="file-name">{file.name}</span>
                  <button 
                    type="button" 
                    className="remove-file" 
                    onClick={() => removeFile(index)}
                    title="Usuń plik"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            
            <button
              type="submit"
              className="submit-btn"
              disabled={isLoading}
              aria-busy={isLoading}
              aria-disabled={isLoading}
              style={{
                opacity: isLoading ? 0.7 : 1,
                cursor: isLoading ? 'not-allowed' : 'pointer'
              }}
            >
              {isLoading ? (
                <>
                  <LoadingSpinner label="Wysyłanie…" />
                  <span style={{ marginLeft: '10px', fontSize: '0.9rem', opacity: 0.8 }}>
                    Proszę czekać...
                  </span>
                </>
              ) : (
                'WYŚLIJ I OTRZYMAJ ANALIZĘ'
              )}
            </button>
          </form>
        </div>
      </section>

    </>
  )
}

export function BackgroundContainer() {
  return (
    <div className="background-container">
      <div className="background-overlay"></div>
      <div className="neon-glow"></div>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <Image 
              src="/images/logo.svg" 
              alt="Mapgain Logo" 
              className="footer-logo-image"
              width={28}
              height={28}
            />
            <span className="footer-logo-text">mapgain</span>
          </div>
          
          <div className="footer-links">
            <a 
              href="https://www.facebook.com/profile.php?id=61580413373339" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              Facebook
            </a>
            <a 
              href="https://mapgain.pl/kontakt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              Kontakt
            </a>
            <a 
              href="/polityka-prywatnosci" 
              className="footer-link"
            >
              Polityka Prywatności
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}