import { 
  Header, 
  BackgroundContainer 
} from '@/components'

export default function EbookPage() {
  return (
    <>
      <BackgroundContainer />
      <Header />
      
      <main className="main-container ebook-page">
        <header className="ebook-header">
          <h1 className="ebook-main-title">
            Google Business Profile – Twoja wizytówka, która zdobywa klientów lokalnych
          </h1>
        </header>
        
        <div className="ebook-text">
          <p className="ebook-intro">
            Możesz mieć świetny produkt, zespół pełen profesjonalistów i obsługę na najwyższym poziomie. 
            Ale jeśli nikt nie znajdzie Twojej firmy online, trudno będzie wygrać z konkurencją. 
            Większość osób szukających usług czy sklepów zaczyna od wpisania frazy w Google. 
            I właśnie tam pojawia się jedno z najważniejszych narzędzi dla biznesu lokalnego — 
            <strong>Google Business Profile</strong> (dawniej wizytówka Google).
          </p>
          
          <p className="ebook-paragraph">
            To cyfrowa tablica ogłoszeń Twojej firmy, która działa w wyszukiwarce i na Mapach Google. 
            Dobrze przygotowana i regularnie aktualizowana potrafi sprowadzić klientów szybciej niż drogie kampanie reklamowe.
          </p>
          
          <h2 className="ebook-section-title">Co to jest Google Business Profile?</h2>
          <p className="ebook-paragraph">
            To publiczny profil Twojej działalności, widoczny w wynikach Google i na mapach. 
            Zawiera podstawowe informacje o firmie, takie jak:
          </p>
          <ul className="ebook-list">
            <li>pełna nazwa i adres (lub obszar działania),</li>
            <li>godziny pracy,</li>
            <li>numer telefonu i link do strony internetowej,</li>
            <li>zdjęcia lokalu, produktów i zespołu,</li>
            <li>opinie klientów wraz z Twoimi odpowiedziami,</li>
            <li>aktualności i oferty specjalne.</li>
          </ul>
          <p className="ebook-paragraph">
            Dzięki temu potencjalny klient nie musi szukać dalej – od razu widzi kto, gdzie i jak może mu pomóc.
          </p>
          
          <h2 className="ebook-section-title">Dlaczego wizytówka Google jest tak istotna dla firm lokalnych?</h2>
          <p className="ebook-paragraph">
            Kiedy ktoś szuka &ldquo;fryzjera w pobliżu&rdquo; albo &ldquo;najlepszej pizzerii w centrum&rdquo;, 
            zazwyczaj nie czyta kilkunastu stron wyników. Zatrzymuje się na pierwszych propozycjach z mapki 
            i kontaktuje się z tym miejscem, które wygląda najbardziej profesjonalnie.
          </p>
          <p className="ebook-paragraph">
            Dobrze prowadzone Google Business Profile to:
          </p>
          <ul className="ebook-list">
            <li><strong>lepsza widoczność</strong> – kompletne dane i częste aktualizacje zwiększają szansę na wyższą pozycję,</li>
            <li><strong>budowanie zaufania</strong> – recenzje i zdjęcia dają wiarygodny obraz firmy,</li>
            <li><strong>łatwiejszy kontakt</strong> – jednym kliknięciem klient zadzwoni, sprawdzi trasę albo odwiedzi stronę,</li>
            <li><strong>niski koszt pozyskania klienta</strong> – obecność w Mapach Google to darmowa forma promocji,</li>
            <li><strong>wyróżnienie się w tłumie</strong> – atrakcyjna wizytówka działa jak wizualna reklama Twojego biznesu.</li>
          </ul>
          
          <h2 className="ebook-section-title">Jak Google decyduje, kto pojawia się na górze wyników?</h2>
          <p className="ebook-paragraph">
            Na ranking wizytówek wpływa kilka kluczowych czynników:
          </p>
          <ul className="ebook-list">
            <li><strong>frazy kluczowe</strong> – w nazwie i opisach usług, np. &ldquo;dentysta Ursynów&rdquo;,</li>
            <li><strong>opinie i oceny</strong> – liczba i treść recenzji ma ogromne znaczenie,</li>
            <li><strong>spójność danych (NAP)</strong> – nazwa, adres i telefon muszą być takie same wszędzie w internecie,</li>
            <li><strong>dobór kategorii</strong> – im precyzyjniej określisz branżę, tym lepiej Google dopasuje profil,</li>
            <li><strong>aktywność</strong> – nowe wpisy, zdjęcia i oferty świadczą o &ldquo;żywym&rdquo; profilu,</li>
            <li><strong>linki i wzmianki w sieci</strong> – odnośniki z katalogów czy lokalnych portali wspierają widoczność,</li>
            <li><strong>bliskość użytkownika</strong> – w przypadku usług &ldquo;tu i teraz&rdquo; (np. restauracja), Google promuje miejsca położone najbliżej.</li>
          </ul>
          
          <h2 className="ebook-section-title">Zakładanie i weryfikacja wizytówki krok po kroku</h2>
          <ol className="ebook-ordered-list">
            <li>Zaloguj się na swoje konto Google i przejdź do <a href="https://business.google.com" target="_blank" rel="noopener noreferrer" className="ebook-link">business.google.com</a>.</li>
            <li>Dodaj nazwę firmy i dopasowaną kategorię.</li>
            <li>Wprowadź adres (jeśli obsługujesz klientów stacjonarnie) lub obszar działania.</li>
            <li>Uzupełnij kontakt, godziny otwarcia i inne dane.</li>
            <li>Zweryfikuj profil — najczęściej przez pocztówkę z kodem, czasem przez e-mail lub telefon.</li>
            <li>Po weryfikacji uzupełnij opis, zdjęcia, produkty i aktualne oferty.</li>
          </ol>
          <p className="ebook-paragraph">
            Od tego momentu wizytówka zacznie być widoczna w wynikach wyszukiwania i na mapach.
          </p>
          
          <h2 className="ebook-section-title">Jak optymalizować Google Business Profile?</h2>
          <p className="ebook-paragraph">
            Samo założenie profilu to dopiero początek. Aby faktycznie zdobywać klientów, musisz dbać o jego rozwój.
          </p>
          <p className="ebook-paragraph">
            <strong>Sprawdzone praktyki:</strong>
          </p>
          <ul className="ebook-list">
            <li><strong>Odpowiadaj na opinie</strong> – nawet negatywne, ale w sposób kulturalny. To pokazuje profesjonalizm.</li>
            <li><strong>Dodawaj zdjęcia</strong> – lokalu, produktów, wydarzeń. To element, który najbardziej przyciąga uwagę.</li>
            <li><strong>Publikuj posty</strong> – informacje o nowościach, promocjach czy zmianach godzin otwarcia.</li>
            <li><strong>Dbaj o aktualność danych</strong> – błędny numer telefonu to stracony klient.</li>
            <li><strong>Używaj słów kluczowych</strong> – w opisach i postach warto stosować frazy, które klienci naprawdę wpisują w Google.</li>
          </ul>
          
          <h2 className="ebook-section-title">Opinie – fundament zaufania</h2>
          <p className="ebook-paragraph">
            Recenzje to &ldquo;społeczny dowód słuszności&rdquo;. Klienci ufają innym ludziom bardziej niż reklamom.
          </p>
          <p className="ebook-paragraph">
            <strong>Jak dobrze wykorzystać sekcję opinii?</strong>
          </p>
          <ul className="ebook-list">
            <li>zachęcaj klientów do dzielenia się doświadczeniami,</li>
            <li>udostępniaj link do wizytówki w mailach czy social mediach,</li>
            <li>odpowiadaj na każdą opinię, budując relacje i poprawiając widoczność,</li>
            <li>pamiętaj, że w odpowiedziach także możesz umieszczać słowa kluczowe.</li>
          </ul>
          
          <h2 className="ebook-section-title">Czy profil Google wystarczy zamiast strony internetowej?</h2>
          <p className="ebook-paragraph">
            W niektórych przypadkach – tak. Klient często sprawdza tylko mapę, numer telefonu i recenzje. 
            Jednak posiadanie strony www daje dodatkowe możliwości:
          </p>
          <ul className="ebook-list">
            <li>publikacja szczegółowych opisów usług,</li>
            <li>prowadzenie bloga i content marketingu dla SEO,</li>
            <li>budowanie wizerunku eksperta i przewagi konkurencyjnej.</li>
          </ul>
          <p className="ebook-paragraph">
            Najlepsze efekty daje spójne połączenie strony i wizytówki.
          </p>
          
          <h2 className="ebook-section-title">Pozycjonowanie wizytówki – czyli lokalne SEO</h2>
          <p className="ebook-paragraph">
            Samo założenie profilu to dopiero początek rywalizacji. Jeśli w okolicy działa wielu podobnych usługodawców, 
            konieczne jest lokalne pozycjonowanie.
          </p>
          <p className="ebook-paragraph">
            W jego skład wchodzą:
          </p>
          <ul className="ebook-list">
            <li>analiza lokalnych fraz kluczowych,</li>
            <li>optymalizacja opisów, wpisów i odpowiedzi,</li>
            <li>dostosowanie strony internetowej pod lokalne SEO,</li>
            <li>zdobywanie linków z katalogów i portali miejskich,</li>
            <li>systematyczne zbieranie opinii.</li>
          </ul>
          <p className="ebook-paragraph">
            Czas potrzebny na osiągnięcie widocznych wyników zależy od konkurencji — od kilku tygodni do nawet kilku miesięcy.
          </p>
          
          <h2 className="ebook-section-title">Czy warto zlecić prowadzenie wizytówki ekspertom?</h2>
          <p className="ebook-paragraph">
            Teoretycznie każdy przedsiębiorca może prowadzić profil samodzielnie. W praktyce wymaga to systematyczności, 
            znajomości SEO i sporego nakładu czasu.
          </p>
          <p className="ebook-paragraph">
            <strong>Agencja może zapewnić:</strong>
          </p>
          <ul className="ebook-list">
            <li>regularne wpisy i optymalizację profilu,</li>
            <li>kompleksowe zarządzanie opiniami,</li>
            <li>analizę i dobór słów kluczowych,</li>
            <li>raporty pokazujące realne efekty,</li>
            <li>strategię obejmującą także stronę internetową i reklamy.</li>
          </ul>
          <p className="ebook-paragraph">
            Dla firm z wieloma lokalizacjami to ogromna oszczędność czasu i gwarancja spójności danych.
          </p>
          
          <h2 className="ebook-section-title">Podsumowanie</h2>
          <p className="ebook-paragraph">
            Google Business Profile to obecnie jedno z najskuteczniejszych narzędzi marketingu lokalnego. 
            W dobrze prowadzonym profilu klient znajdzie wszystkie informacje potrzebne, by w ciągu kilku sekund 
            podjąć decyzję o kontakcie.
          </p>
          <p className="ebook-paragraph">
            To inwestycja, która zwraca się długo — zwiększa liczbę telefonów, wizyt w lokalu i zamówień online. 
            A jeśli brakuje Ci czasu na samodzielne prowadzenie, specjaliści mogą zająć się wszystkim za Ciebie.
          </p>
          <p className="ebook-conclusion">
            Dobrze przygotowana wizytówka w Google działa 24/7 i może stać się Twoim najlepszym sprzedawcą.
          </p>
        </div>
      </main>
    </>
  )
}

