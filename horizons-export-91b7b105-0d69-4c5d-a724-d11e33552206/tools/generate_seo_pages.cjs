const fs = require('fs');
const path = require('path');

const srcDir = 'c:\\Users\\davin\\Desktop\\BM\\Client Work\\Website\\Trockfix\\horizons-export-91b7b105-0d69-4c5d-a724-d11e33552206\\src';
const pagesDir = path.join(srcDir, 'pages');

const pages = fs.readdirSync(pagesDir).filter(f => f.endsWith('Page.jsx') && f !== 'HomePage.jsx' && f !== 'LegalPages.jsx' && f !== 'ContactPage.jsx' && f !== 'DatenschutzPage.jsx' && f !== 'ImpressumPage.jsx');

function formatTitle(str) {
    const raw = str.replace('Page.jsx', '');
    return raw.replace(/([A-Z])/g, ' $1').trim();
}

for (let file of pages) {
    const filePath = path.join(pagesDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('Platzhalter') || content.includes('Platzhalter-Seite')) {
        const pageName = file.replace('.jsx', '');
        const niceName = formatTitle(file);
        
        let pathName = file.replace('Page.jsx', '').toLowerCase();
        
        let heroDesc = `Ihre Experten für ${niceName} in Ingolstadt und Umgebung. Vertrauen Sie auf 10+ Jahre Erfahrung.`;
        let p1 = `${niceName} erfordert Fachwissen, moderne Technik und ein schnelles Eingreifen. Trockfix aus der Theoderichstraße 8 in Ingolstadt ist Ihr verlässlicher Ansprechpartner für diese und weitere Schadensfälle.`;
        let p2 = `Wir sorgen dafür, dass Ihr Zuhause oder Ihre Geschäftsräume rasch wieder nutzbar sind. Mit unseren zertifizierten Verfahren beheben wir Schäden nachhaltig und sicher.`;
        
        const template = `import React from 'react';
import { Helmet } from 'react-helmet';
import { Shield, Clock, ThumbsUp, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const ${pageName} = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>${niceName} Ingolstadt | Trockfix Bautrocknung</title>
        <meta name="description" content="${niceName} in Ingolstadt durch Trockfix Bautrocknung. Wir sind Ihr kompetenter Partner an der Theoderichstraße 8. Jetzt kontaktieren!" />
        <link rel="canonical" href="https://trockfix.de/${pathName}" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/0ba420891c946c0f1a564c023bda42e3-QT2rQ.webp')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">${niceName} Ingolstadt</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            ${heroDesc}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-600">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Professionelle ${niceName} </h2>
            <p className="mb-6">${p1}</p>
            <p className="mb-6">${p2}</p>

            <div className="grid md:grid-cols-3 gap-6 my-12">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center hover:shadow-md transition-shadow">
                <Clock className="w-10 h-10 text-[#00BCD4] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Schnell vor Ort</h3>
                <p className="text-sm">In Ingolstadt und Umgebung sind wir zügig bei Ihnen.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center hover:shadow-md transition-shadow">
                <Shield className="w-10 h-10 text-[#00BCD4] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">10+ Jahre Erfahrung</h3>
                <p className="text-sm">Vertrauen Sie auf bewährte Expertise und modernste Technik.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center hover:shadow-md transition-shadow">
                <ThumbsUp className="w-10 h-10 text-[#00BCD4] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Transparente Preise</h3>
                <p className="text-sm">Faire Kalkulation ohne versteckte Kosten.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Warum Trockfix für ${niceName} wählen?</h2>
            <ul className="list-disc pl-6 space-y-2 mb-8 border-l-4 border-[#00BCD4] bg-gray-50 py-4 pr-4 rounded-r-lg">
               <li>Fachgerechte Durchführung aller Arbeiten direkt in Ingolstadt</li>
               <li>Einsatz von zertifizierten und materialschonenden Verfahren</li>
               <li>Lokale Erreichbarkeit: Theoderichstraße 8, 85051 Ingolstadt</li>
               <li>Direkte und stressfreie Abwicklung mit Ihrer Versicherung möglich</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Häufige Fragen (FAQ)</h2>
            <div className="space-y-4 mb-12">
               <div className="border border-gray-200 rounded-lg p-4 bg-white hover:border-[#00BCD4] transition-colors">
                  <h3 className="font-bold text-gray-900 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#00BCD4]"></div> Wie schnell können Sie vor Ort sein?</h3>
                  <p className="text-sm mt-2 ml-4">Dank unseres zentralen Standorts in Ingolstadt sind wir in der Regel sehr schnell bei Ihnen, um weitere Schäden zu verhindern.</p>
               </div>
               <div className="border border-gray-200 rounded-lg p-4 bg-white hover:border-[#00BCD4] transition-colors">
                  <h3 className="font-bold text-gray-900 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#00BCD4]"></div> Welche Gebiete bedienen Sie genau?</h3>
                  <p className="text-sm mt-2 ml-4">Wir helfen in ganz Ingolstadt (inkl. Haunwöhr, Kothau, Ringsee, Friedrichshofen) sowie in umliegenden Orten wie Gaimersheim, Kösching, Manching, Neuburg und Pfaffenhofen.</p>
               </div>
            </div>

            {/* Hyperlocal Linking Section */}
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl mt-12 shadow-sm">
               <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                 <MapPin className="w-5 h-5 text-[#00BCD4] mr-2" />
                 Einsatzgebiete & Weitere Services
               </h3>
               <p className="text-sm mb-4 leading-relaxed">Neben <strong>${niceName}</strong> bieten wir kompetente Unterstützung bei <Link to="/wasserschadensanierung" className="text-[#00BCD4] hover:underline font-semibold">Wasserschäden</Link> und <Link to="/bautrocknung" className="text-[#00BCD4] hover:underline font-semibold">Bautrocknung</Link>. Wir sind Ihr idealer Partner für Projekte im gesamten Stadtgebiet Ingolstadt sowie in:</p>
               <div className="flex flex-wrap gap-2">
                 <Link to="/einzugsgebiet/gaimersheim" className="bg-white border border-gray-200 px-3 py-1.5 rounded-full text-xs font-medium hover:border-[#00BCD4] hover:text-[#00BCD4] transition-all shadow-sm">Gaimersheim</Link>
                 <Link to="/einzugsgebiet/manching" className="bg-white border border-gray-200 px-3 py-1.5 rounded-full text-xs font-medium hover:border-[#00BCD4] hover:text-[#00BCD4] transition-all shadow-sm">Manching</Link>
                 <Link to="/einzugsgebiet/koesching" className="bg-white border border-gray-200 px-3 py-1.5 rounded-full text-xs font-medium hover:border-[#00BCD4] hover:text-[#00BCD4] transition-all shadow-sm">Kösching</Link>
                 <Link to="/einzugsgebiet/neuburg-donau" className="bg-white border border-gray-200 px-3 py-1.5 rounded-full text-xs font-medium hover:border-[#00BCD4] hover:text-[#00BCD4] transition-all shadow-sm">Neuburg a.d. Donau</Link>
                 <Link to="/einzugsgebiet/pfaffenhofen" className="bg-white border border-gray-200 px-3 py-1.5 rounded-full text-xs font-medium hover:border-[#00BCD4] hover:text-[#00BCD4] transition-all shadow-sm">Pfaffenhofen</Link>
               </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default ${pageName};
`;
        fs.writeFileSync(filePath, template);
        console.log('Updated ' + filePath);
    }
}
