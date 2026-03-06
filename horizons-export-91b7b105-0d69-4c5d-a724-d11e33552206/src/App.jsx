import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import CookieSettings from '@/components/CookieSettings';
import ScrollToTop from '@/utils/ScrollToTop';
import { CookieProvider } from '@/contexts/CookieContext';

// Existing Pages
import HomePage from '@/pages/HomePage';
import ServicesDetailPage from '@/pages/ServicesDetailPage';
import LegalPages from '@/pages/LegalPages';

// Landing Pages
import WasserschadensanierungPage from '@/pages/WasserschadensanierungPage';
import BautrocknungPage from '@/pages/BautrocknungPage';

// Wasserschaden Services
import WasserschadenbeseitigungPage from '@/pages/WasserschadenbeseitigungPage';
import SchimmelsanierungPage from '@/pages/SchimmelsanierungPage';
import NotdienstPage from '@/pages/NotdienstPage';
import LeckortungPage from '@/pages/LeckortungPage';
import KellerwasserschadenPage from '@/pages/KellerwasserschadenPage';
import HochwasserschadenPage from '@/pages/HochwasserschadenPage';
import GeruchsneutralisationPage from '@/pages/GeruchsneutralisationPage';

// Bautrocknung Services
import EstrichtrocknungPage from '@/pages/EstrichtrocknungPage';
import WandtrocknungPage from '@/pages/WandtrocknungPage';
import DaemmschichttrocknungPage from '@/pages/DaemmschichttrocknungPage';
import NeubautrocknungPage from '@/pages/NeubautrocknungPage';
import FlachdachtrocknungPage from '@/pages/FlachdachtrocknungPage';
import BautrocknerverleihPage from '@/pages/BautrocknerverleihPage';
import BaubeheizungPage from '@/pages/BaubeheizungPage';

// Location Pages
import EinzugsgebietPage from '@/pages/EinzugsgebietPage';
import GaimersheimPage from '@/pages/GaimersheimPage';
import KoeschingPage from '@/pages/KoeschingPage';
import ManchingPage from '@/pages/ManchingPage';
import NeuburgPage from '@/pages/NeuburgPage';
import PfaffenhofenPage from '@/pages/PfaffenhofenPage';
import HaunwoehrPage from '@/pages/HaunwoehrPage';
import KothauPage from '@/pages/KothauPage';
import RingseePage from '@/pages/RingseePage';
import FriedrichshofenPage from '@/pages/FriedrichshofenPage';

// Standard Pages
import KontaktPage from '@/pages/KontaktPage';
import ImpressumPage from '@/pages/ImpressumPage';
import DatenschutzPage from '@/pages/DatenschutzPage';

function App() {
  return (
    <CookieProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
          <Helmet>
            <title>BESTE Wasserschadensanierung Ingolstadt | Trockfix Bautrocknung | Sanierung in meiner Nähe</title>
            <meta name="description" content="Trockfix ist Ihr zuverlässiger Experten-Partner für Bautrocknung & Wasserschadensanierung in Ingolstadt und Umgebung. Fachgerecht, schnell und transparent." />
            <link rel="canonical" href="https://trockfix.de/" />
            <script type="application/ld+json">
              {`
                {
                  "@context": "https://schema.org",
                  "@type": "LocalBusiness",
                  "name": "Trockfix Bautrocknung & Wasserschadensanierung",
                  "url": "https://trockfix.de/",
                  "telephone": "0171 3498807",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Theoderichstraße 8",
                    "addressLocality": "Ingolstadt",
                    "postalCode": "85051",
                    "addressCountry": "DE"
                  },
                  "areaServed": "Ingolstadt und Umgebung"
                }
              `}
            </script>
          </Helmet>
          
          <ScrollToTop />
          <Header />
          
          <main className="flex-grow">
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/leistungen" element={<ServicesDetailPage />} />
              <Route path="/legal" element={<LegalPages />} />
              
              {/* Landing Pages */}
              <Route path="/wasserschadensanierung" element={<WasserschadensanierungPage />} />
              <Route path="/bautrocknung" element={<BautrocknungPage />} />
              
              {/* Wasserschaden Services */}
              <Route path="/wasserschadensanierung/wasserschadenbeseitigung" element={<WasserschadenbeseitigungPage />} />
              <Route path="/wasserschadensanierung/schimmelsanierung" element={<SchimmelsanierungPage />} />
              <Route path="/wasserschadensanierung/notdienst-24h" element={<NotdienstPage />} />
              <Route path="/wasserschadensanierung/leckortung" element={<LeckortungPage />} />
              <Route path="/wasserschadensanierung/kellerwasserschaden" element={<KellerwasserschadenPage />} />
              <Route path="/wasserschadensanierung/hochwasserschaden" element={<HochwasserschadenPage />} />
              <Route path="/wasserschadensanierung/geruchsneutralisation" element={<GeruchsneutralisationPage />} />
              
              {/* Bautrocknung Services */}
              <Route path="/bautrocknung/estrichtrocknung" element={<EstrichtrocknungPage />} />
              <Route path="/bautrocknung/wandtrocknung" element={<WandtrocknungPage />} />
              <Route path="/bautrocknung/daemmschichttrocknung" element={<DaemmschichttrocknungPage />} />
              <Route path="/bautrocknung/neubautrocknung" element={<NeubautrocknungPage />} />
              <Route path="/bautrocknung/flachdachtrocknung" element={<FlachdachtrocknungPage />} />
              <Route path="/bautrocknung/bautrocknerverleih" element={<BautrocknerverleihPage />} />
              <Route path="/bautrocknung/baubeheizung" element={<BaubeheizungPage />} />
              
              {/* Location Pages */}
              <Route path="/einzugsgebiet" element={<EinzugsgebietPage />} />
              <Route path="/einzugsgebiet/gaimersheim" element={<GaimersheimPage />} />
              <Route path="/einzugsgebiet/koesching" element={<KoeschingPage />} />
              <Route path="/einzugsgebiet/manching" element={<ManchingPage />} />
              <Route path="/einzugsgebiet/neuburg-donau" element={<NeuburgPage />} />
              <Route path="/einzugsgebiet/pfaffenhofen" element={<PfaffenhofenPage />} />
              <Route path="/einzugsgebiet/haunwoehr" element={<HaunwoehrPage />} />
              <Route path="/einzugsgebiet/kothau" element={<KothauPage />} />
              <Route path="/einzugsgebiet/ringsee" element={<RingseePage />} />
              <Route path="/einzugsgebiet/friedrichshofen" element={<FriedrichshofenPage />} />
              
              {/* Standard Pages */}
              <Route path="/kontakt" element={<KontaktPage />} />
              <Route path="/impressum" element={<ImpressumPage />} />
              <Route path="/datenschutz" element={<DatenschutzPage />} />
            </Routes>
          </main>
          
          <Footer />
          <Toaster />
          <CookieSettings />
        </div>
      </Router>
    </CookieProvider>
  );
}

export default App;